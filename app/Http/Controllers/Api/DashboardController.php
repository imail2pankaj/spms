<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProjectTask;
use App\Models\ProjectTaskTime;
use App\Models\ServiceTicket;
use App\Models\UserLeave;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getStatistic($user_id)
    {
        $user_id = request()->user()->id;
        $leavesApplied = UserLeave::where(['user_id'=> $user_id,'status' => 'Applied'])->count();
        $openServiceTicket = ServiceTicket::where(['user_id'=> $user_id,'status' => 'Open'])->count();

        $columns = ['id','title','due_date','task_status', 'user_id','project_id', 'total_time','created_at'];
        $with = ['project:id,title,slug,start_date,project_status','user:id,first_name,last_name'];
        $activeTask = ProjectTask::select($columns)->with($with)->where('user_id', $user_id)->whereIn('task_status', ['Active','Started','Paused']);

        $activeTasksList = $activeTask->get();

        $pendingLeaves = UserLeave::pendingLeaveThisYear(auth()->user()->id);

        // $taskTime = ProjectTaskTime::where()
        $tasks = ProjectTask::with(['project' => function($query) {
            return $query->select(['id','title','internal_non_project']);
        }])->withSum('taskTime','time_duration')->whereHas('taskTime', function($query){
            return $query->whereRaw('DAY(created_at) = ?', date("d"));
        })->where('user_id',auth()->user()->id)->get();
        $chart = [
            'int_hr' => '',
            'int_perc' => 0,
            'non_hr' => '',
            'non_perc' => 0,
            'pro_hr' => '',
            'pro_perc' => 0,
        ];
        foreach($tasks as $task) {
            if($task->project->internal_non_project == 'Non') {
                $chart['non_perc'] = $chart['non_perc'] + $task->total_time;
            } else if($task->project->internal_non_project == 'Internal') {
                $chart['int_perc'] = $chart['int_perc'] + $task->total_time;
            } else if($task->project->internal_non_project == 'Client') {
                $chart['pro_perc'] = $chart['pro_perc'] + $task->total_time;
            }
        }
        $chart['int_hr'] = $this->convertTime($chart['int_perc']);
        $chart['non_hr'] = $this->convertTime($chart['non_perc']);
        $chart['pro_hr'] = $this->convertTime($chart['pro_perc']);

        return response()->json([
            'tasks' => $tasks,
            'leavesApplied'=>$leavesApplied,
            'activeTasksList' => $activeTasksList,
            'activeTasks' => $activeTask->count(),
            'pendingLeaves' => $pendingLeaves,
            'openServiceTicket'=>$openServiceTicket,
            "chart" => $chart
        ]);
    }

    public function convertTime($seconds) {
        $m = floor(($seconds%3600)/60);
        $h = floor(($seconds%86400)/3600);
        return $seconds > 0 ? ($h > 0 ? $h .' h ' : '') . $m .' m' : "";
    }
}
