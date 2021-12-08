<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use App\Models\ProjectAttachment;
use App\Models\ProjectMilestone;
use App\Models\ProjectNote;
use App\Models\ProjectTask;
use App\Models\ProjectUpdate;
use App\Models\ProjectUser;
use App\Models\User;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public $roles = [
        ['id'=> 6, 'name'=> 'developer'],
        ['id'=> 7, 'name'=> 'designer'],
        ['id'=> 5, 'name'=> 'qa'],
        ['id'=> 11, 'name'=> 'bde'],
        ['id'=> 3, 'name'=> 'pm'],
        ['id'=> 9, 'name'=> 'customer'],
    ];

    public function index(Request $request)
    {
        $projects = Project::with(['developers','designers','pms','qas','bdes','customers']);
        if ($request->get('status') > -1) {
            $projects->where("project_status", $request->get('status'));
        }
        if (!empty($request->get('keyword'))) {
            $projects->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('title', 'LIKE', $queryParams)
                      ->orWhere('description', 'LIKE', $queryParams)
                      ->orWhere('project_status', 'LIKE', $queryParams)
                      ->orWhere('project_type', 'LIKE', $queryParams)
                      ->orWhere('start_date', 'LIKE', $queryParams)
                      ->orWhere('end_date', 'LIKE', $queryParams);
            });
        }
        return $projects->paginate($request->get('pagination'));
    }

    public function store(ProjectRequest $request)
    {
        $data = $request->all();
        $project = Project::create($data);
        foreach ($this->roles as $key => $role) {
            if ($request->has($role['name']) && !empty($request->input($role['name']))) {
                $userIds = explode(',', $request->input($role['name']));
                foreach ($userIds as $id) {
                    ProjectUser::create(['project_id'=>$project->id,'user_id'=>$id, 'role_id'=>$role['id']]);
                }
            }
        }
        ProjectNote::create(['project_id'=>$project->id,'description'=>$request->input('note')]);

        return $project;
    }

    public function show(Project $project)
    {
        $project->developer = ProjectUser::where('project_id', $project->id)->where('role_id', 6)->pluck('user_id');
        $project->designer = ProjectUser::where('project_id', $project->id)->where('role_id', 7)->pluck('user_id');
        $project->qa = ProjectUser::where('project_id', $project->id)->where('role_id', 5)->pluck('user_id');
        $project->pm = ProjectUser::where('project_id', $project->id)->where('role_id', 3)->pluck('user_id');
        $project->bde = ProjectUser::where('project_id', $project->id)->where('role_id', 11)->pluck('user_id');
        $project->customer = ProjectUser::where('project_id', $project->id)->where('role_id', 9)->pluck('user_id');
        $project->note = ProjectNote::where('project_id', $project->id)->first()->description;
        return response()->json($project);
    }

    public function update(ProjectRequest $request, Project $project)
    {
        $data = $request->all();
        ProjectUser::where('project_id', $project->id)->delete();
        foreach ($this->roles as $key => $role) {
            if ($request->has($role['name']) && !empty($request->input($role['name']))) {
                $userIds = explode(',', $request->input($role['name']));
                foreach ($userIds as $id) {
                    ProjectUser::create(['project_id'=>$project->id,'user_id'=>$id, 'role_id'=>$role['id']]);
                }
            }
        }

        $project->update($data);

        $project_note = ProjectNote::where('project_id', $project->id)->first();
        $project_note->update(['description'=>$request->input('note')]);
        return $project;
    }

    public function destroy(Project $project)
    {
        ProjectNote::where('project_id', $project->id)->delete();
        ProjectUser::where('project_id', $project->id)->delete();
        ProjectAttachment::where('project_id', $project->id)->delete();
        ProjectMilestone::where('project_id', $project->id)->delete();
        ProjectTask::where('project_id', $project->id)->delete();
        ProjectUpdate::where('project_id', $project->id)->delete();

        $project->delete();

        return response()->noContent();
    }

    public function getDifferentRoleUsers()
    {
        $developers = User::select('id', 'first_name', 'last_name')->role('developer')->where('user_status', 1)->get()->toArray();
        $bde = User::select('id', 'first_name', 'last_name')->role('bde')->where('user_status', 1)->get()->toArray();
        $pm = User::select('id', 'first_name', 'last_name')->role('pm')->where('user_status', 1)->get()->toArray();
        $designer = User::select('id', 'first_name', 'last_name')->role('designer')->where('user_status', 1)->get()->toArray();
        $qa = User::select('id', 'first_name', 'last_name')->role('qa')->where('user_status', 1)->get()->toArray();
        $customer = User::select('id', 'first_name', 'last_name')->role('customer')->where('user_status', 1)->get()->toArray();
        return response()->json(['developer'=>$developers,'bde'=>$bde,'pm'=>$pm,'designer'=>$designer,'qa'=>$qa,'customer'=>$customer]);
    }


    public function getBySlug(Request $request, $slug, $page)
    {
        $project = Project::where('slug',$slug)->first();
        if($page == 'task') {
            $created = ProjectTask::with('project')->where('project_id',$project->id)->where('user_id', $request->user()->id)->latest()->get();
            $project->created = $created;
        }

        return response()->json($project);
    }

}
