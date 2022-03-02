<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProjectTask;
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

        return response()->json(['leavesApplied'=>$leavesApplied, 'activeTasksList' => $activeTasksList, 'activeTasks' => $activeTask->count(), 'pendingLeaves' => $pendingLeaves,'openServiceTicket'=>$openServiceTicket]);
    }
}
