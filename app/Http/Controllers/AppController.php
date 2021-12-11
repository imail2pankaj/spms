<?php

namespace App\Http\Controllers;

use App\Models\Project;
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
        if (isset(auth()->user()->roles)) {
            $role = auth()->user()->roles->first()->name;
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
            unset($user->roles);
        }
        return view('app', [
            'user' => $user
        ]);
    }
}
