<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','user_id','milestone_id','title','description','due_date','task_type','priority','completion_rate', 'total_time','task_status'];

    protected $appends = ['total_time_converted'];

    public function getTotalTimeConvertedAttribute() {
        // if($this->attributes['id'] != 0) {

            $extraTime = 0;
            $activeTaskTime = ProjectTaskTime::where('task_id', $this->attributes['id'])->latest()->first();
            if($activeTaskTime && in_array($activeTaskTime->task_status,['Started','Active'])){
                $extraTime = strtotime(date('Y-m-d H:i:s')) - strtotime($activeTaskTime->created_at);
            }

            $ss = (isset($this->attributes['total_time']) ? $this->attributes['total_time'] : 0) + $extraTime;
            $m = floor(($ss%3600)/60);
            $h = floor(($ss%86400)/3600);
            return ($h > 0 ? $h .' h ' : '') . $m .' m';
        // }
        return null;
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function history()
    {
        return $this->hasMany(ProjectTaskHistory::class, 'task_id', 'id');
    }

    public function activeTask()
    {
        return $this->hasOne(ProjectTask::class, 'task_id', 'id')->whereIn('task_status',['Started','Active']);
    }

    static function getProjectTasks($project_id) {

        $columns = ['id','title','due_date','task_status', 'user_id','project_id', 'total_time','created_at'];
        $with = ['project:id,title,slug,start_date,project_status','user:id,first_name,last_name'];

        $createdTask = ProjectTask::select($columns)->with($with)->where('project_id', $project_id)->where('task_status', 'Created')->get();
        $activeTask = ProjectTask::select($columns)->with($with)->where('project_id', $project_id)->whereIn('task_status', ['Active','Started','Paused'])->get();
        $completedTask = ProjectTask::select($columns)->with($with)->where('project_id', $project_id)->where('task_status', 'Completed')->get();

        return [
            'created' => $createdTask,
            'active' => $activeTask,
            'completed' => $completedTask,
        ];
    }
}
