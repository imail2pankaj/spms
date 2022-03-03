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
        return $projects->latest()->paginate($request->get('pagination'));
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
        $project = Project::with('note', 'attachments')->where('slug',$slug)->first();
        if($page == 'task') {
            $created = ProjectTask::with('project')->where('project_id',$project->id)->where('user_id', $request->user()->id)->latest()->get();
            $project->created = $created;
        }
        return response()->json($project);
    }

    public function getProjectStatus(Request $request, $project_id)
    {
        $updates = ProjectUpdate::with(['user'=> function($query) {
            return $query->select(['id','first_name','last_name']);
        }])->where('project_id',$project_id)->latest()->get();

        return response()->json($updates);
    }

    public function submitProjectStatus(Request $request, $project_id)
    {
        $description = $request->input('description');
        $data = [
            'user_id' => auth()->user()->id,
            'project_id' => $project_id,
            'description' => $description,
        ];
        return ProjectUpdate::create($data);
    }

    public function submitProjectNote(Request $request, $project_id)
    {
        $description = $request->has('description') ? $request->input('description') : "";
        $projectUpdate = ProjectNote::find($project_id);
        $data = [
            'description' => $description,
        ];
        return $projectUpdate->update($data);
    }

    public function getProjectMilestones(Request $request, $project_id)
    {
        $milestones = ProjectMilestone::where('project_id',$project_id)->latest('start_date')->get();

        return response()->json($milestones);
    }

    public function deleteProjectMilestones(Request $request, $project_id, $milestone_id) {
        ProjectMilestone::destroy($milestone_id);
        return response()->noContent();
    }
    public function submitProjectMilestones(Request $request, $project_id)
    {
        $title = $request->input('title');
        $start_date = $request->input('start_date');
        $end_date = $request->input('end_date');
        $data = [
            'project_id' => $project_id,
            'title' => $title,
            'start_date' => $start_date,
            'end_date' => $end_date,
        ];
        return ProjectMilestone::create($data);
    }

    public function submitProjectAttachment(Request $request, $project_id)
    {
        $data = $request->all();
        $data['project_id'] = $project_id;
        if ($request->hasFile('file_name')) {
            $image = $request->file('file_name');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/project");
            $image->move($destinationPath, $imageName);

            $data['file_name'] = $imageName;
        }
        return ProjectAttachment::create($data);
    }


    public function deleteProjectAttachment(Request $request, $project_id, $attachment_id) {

        $projectAttachment = ProjectAttachment::find($attachment_id);
        $filePath = public_path('uploads/project/' . $projectAttachment->file_name);
        if(file_exists($filePath)) {
            unlink($filePath);
        }
        $projectAttachment->destroy($attachment_id);
        return response()->noContent();
    }
}
