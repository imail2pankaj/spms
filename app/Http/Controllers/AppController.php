<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectTask;
use App\Models\ProjectUser;
use Illuminate\Http\Request;
use stdClass;

class AppController extends Controller
{
    public function index()
    {
        return redirect('app/dashboard');
    }

    public function app()
    {
        $projects = ['active'=> [],'hold' => []];
        $user = auth()->user();
        $currentTask = [];
        if (isset(auth()->user()->roles)) {
            $role = auth()->user()->roles->first()->name;
            $currentTask = ProjectTask::select('id','project_id','user_id','title','total_time','task_status')->where('user_id', $user->id)->whereIn('task_status',['Active','Started'])->first();

            if($role == 'super-admin' || $role == 'admin') {
                $allProjects = Project::select(['title','slug','project_status'])->whereIn('project_status',['Active','Hold'])->latest()->get();
                foreach ($allProjects as $key => $project) {
                    if($project->project_status == 'Active') {
                        array_push($projects['active'], $project);
                    } else {
                        array_push($projects['hold'], $project);
                    }
                }
                $user['active_projects'] = $projects['active'];
                $user['hold_projects'] = $projects['hold'];
            } else {
                $allProjects = auth()->user()->projects->all();
                foreach ($allProjects as $key => $project) {
                    if($project->project_status == 'Active') {
                        array_push($projects['active'], $project);
                    } else {
                        array_push($projects['hold'], $project);
                    }
                }
                $user['active_projects'] = $projects['active'];
                $user['hold_projects'] = $projects['hold'];
            }
            $user->role = $role;
            if($currentTask){
                $currentTask->time = strtotime(date("Y-m-d H:i:s"));
            }
            $user['activeTask'] = $currentTask;
            unset($user->roles);
        }
        // echo json_encode($currentTask);exit;
        return view('app', [
            'user' => $user,
            'currentTask' => $currentTask ? $currentTask : "{ id: 0, project_id: 0, user_id: 0, title: null, total_time: 0, task_status: 'Created',time:" . strtotime(date("Y-m-d H:i:s")) . " }",
        ]);
    }
}
