<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectTask;
use App\Models\ProjectUser;
use Illuminate\Http\Request;

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
            $user['activeTask'] = $currentTask;
            unset($user->roles);
        }
        // dd($currentTask);
        return view('app', [
            'user' => $user,
            'currentTask' => $currentTask ? $currentTask : "{}",
        ]);
    }
}
