<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

/**
 * App\Models\ProjectTaskTime
 *
 * @property int $id
 * @property int $task_id
 * @property string $task_status
 * @property int $time_duration Total seconds between start and pause task
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\ProjectTask|null $task
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereTaskStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereTimeDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskTime whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProjectTaskTime extends Model
{
    use HasFactory;

    protected $fillable = ['task_id','task_status','time_duration'];

    public function task()
    {
        return $this->belongsTo(ProjectTask::class);
    }

    public function getDailyTaskWorked($user_id)
    {
        $taskTimes = $this->select(['id','task_id','time_duration','task_status',DB::raw('SUM(time_duration) as td')])
        ->with(['task' => function ($query) {
            return $query->select(['id','title','total_time','task_status','project_id']);
        }, 'task.project' => function ($query) {
            return $query->select(['id','title','internal_non_project','project_status']);
        }])
        ->whereHas('task', function($query) use($user_id) {
            return $query->where('user_id',$user_id);
        })
        ->whereRaw('DAY(created_at) = ?', date("d"))
        ->groupBy('task_id')
        ->latest()
        ->get();

        $chart = [
            'int_hr' => '',
            'int_perc' => 0,
            'non_hr' => '',
            'non_perc' => 0,
            'pro_hr' => '',
            'pro_perc' => 0,
        ];

        foreach ($taskTimes as $taskTime) {
            $lastRecord = $taskTime->where('task_id',$taskTime->task_id)->with('task','task.project')->latest()->first();
            if($lastRecord->task->project->internal_non_project == 'Non') {
                $extraTime = $lastRecord->task_status == 'Started' ? strtotime(date('Y-m-d H:i:s')) - strtotime($lastRecord->created_at) : 0;
                $chart['non_perc'] = $chart['non_perc'] + $taskTime->td + $extraTime;
            } else if($lastRecord->task->project->internal_non_project == 'Internal') {
                $extraTime = $lastRecord->task_status == 'Started' ? strtotime(date('Y-m-d H:i:s')) - strtotime($lastRecord->created_at) : 0;
                $chart['int_perc'] = $chart['int_perc'] + $taskTime->td + $extraTime;
            } else if($lastRecord->task->project->internal_non_project == 'Client') {
                $extraTime = $lastRecord->task_status == 'Started' ? strtotime(date('Y-m-d H:i:s')) - strtotime($lastRecord->created_at) : 0;
                $chart['pro_perc'] = $chart['pro_perc'] + $taskTime->td + $extraTime;
            }
        }
        $chart['int_hr'] = $this->convertTime($chart['int_perc']);
        $chart['non_hr'] = $this->convertTime($chart['non_perc']);
        $chart['pro_hr'] = $this->convertTime($chart['pro_perc']);

        $chart['int_perc'] = $this->hoursWorkedInPercent($chart['int_perc']);
        $chart['non_perc'] = $this->hoursWorkedInPercent($chart['non_perc']);
        $chart['pro_perc'] = $this->hoursWorkedInPercent($chart['pro_perc']);

        return $chart;
    }

    public function convertTime($seconds) {
        $m = floor(($seconds%3600)/60);
        $h = floor(($seconds%86400)/3600);
        return $seconds > 0 ? ($h > 0 ? $h .' h ' : '') . $m .' m' : "";
    }

    public function hoursWorkedInPercent($seconds) {
        return $seconds == 0 ? 0 : number_format(($seconds * 100) / 28800, 2);
    }
}
