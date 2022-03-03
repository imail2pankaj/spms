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
        $projects = ['active'=> [],'hold' => [],'non'=>[],'internal'=>[]];
        $user = auth()->user();
        $currentTask = [];
        $user['active_projects'] = [];
        $user['hold_projects'] = [];
        $user['non_projects'] = [];
        $user['internal_projects'] = [];
        if (isset(auth()->user()->roles)) {
            $role = auth()->user()->roles->first()->name;
            $currentTask = ProjectTask::select('id','project_id','user_id','title','total_time','task_status')->where('user_id', $user->id)->whereIn('task_status',['Active','Started'])->first();

            if($role == 'super-admin' || $role == 'admin') {
                $allProjects = Project::select(['title','slug','project_status','internal_non_project'])->whereIn('project_status',['Active','Hold'])->latest()->get();
                foreach ($allProjects as $key => $project) {
                    if($project->project_status == 'Active' && $project->internal_non_project == 'Client') {
                        array_push($projects['active'], $project);
                    } else if($project->project_status == 'Hold' && $project->internal_non_project == 'Client') {
                        array_push($projects['hold'], $project);
                    } else if($project->project_status == 'Active' && $project->internal_non_project == 'Non') {
                        array_push($projects['non'], $project);
                    } else if($project->project_status == 'Active' && $project->internal_non_project == 'Internal') {
                        array_push($projects['internal'], $project);
                    }
                }
                $user['active_projects'] = $projects['active'];
                $user['hold_projects'] = $projects['hold'];
                $user['non_projects'] = $projects['non'];
                $user['internal_projects'] = $projects['internal'];
            } else {
                $allProjects = auth()->user()->projects->all();
                foreach ($allProjects as $key => $project) {
                    if($project->project_status == 'Active' && $project->internal_non_project == 'Client') {
                        array_push($projects['active'], $project);
                    } else if($project->project_status == 'Hold' && $project->internal_non_project == 'Client') {
                        array_push($projects['hold'], $project);
                    } else if($project->project_status == 'Active' && $project->internal_non_project == 'Non') {
                        array_push($projects['non'], $project);
                    } else if($project->project_status == 'Active' && $project->internal_non_project == 'Internal') {
                        array_push($projects['internal'], $project);
                    }
                }
                $user['active_projects'] = $projects['active'];
                $user['hold_projects'] = $projects['hold'];
                $user['non_projects'] = $projects['non'];
                $user['internal_projects'] = $projects['internal'];
            }
            $user->role = $role;
            if($currentTask){
                $currentTask->time = strtotime(date("Y-m-d H:i:s"));
            }
            $user['activeTask'] = $currentTask;
            unset($user->roles);
        }
        // dd($projects);
        // echo json_encode($currentTask);exit;
        return view('app', [
            'user' => $user,
            'currentTask' => $currentTask ? $currentTask : "{ id: 0, project_id: 0, user_id: 0, title: null, total_time: 0, task_status: 'Created',time:" . strtotime(date("Y-m-d H:i:s")) . " }",
        ]);
    }
}
