<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use App\Models\ProjectUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::with(['developers','designers','pms','qas','bdes']);
        if ($request->get('status') > -1) {
            $projects->where("project_status", $request->get('status'));
        }
        // if(!empty($request->get('keyword'))) {
        //     $projects->where(function ($query) use ($request) {
        //         $queryParams = "%" . $request->get('keyword') . "%";
        //         $query->where('first_name', 'LIKE', $queryParams)
        //               ->orWhere('middle_name', 'LIKE', $queryParams)
        //               ->orWhere('last_name', 'LIKE', $queryParams)
        //               ->orWhere('email', 'LIKE', $queryParams)
        //               ->orWhere('user_code', 'LIKE', $queryParams)
        //               ->orWhere('phone_number', 'LIKE', $queryParams);
        //     });
        // }
        return $projects->paginate($request->get('pagination'));
    }

    public function store(ProjectRequest $request)
    {
        $data = $request->all();
        $roles = [
            ['id'=>6, 'name'=>'developer'],
            ['id'=>7, 'name'=>'designer'],
            ['id'=>5, 'name'=>'qa'],
            ['id'=>11, 'name'=>'bde'],
            ['id'=>3, 'name'=>'pm'],
        ];
        $project = Project::create($data);
        foreach ($roles as $key => $role) {
            if ($request->has($role['name']) && !empty($request->input($role['name']))) {
                $userIds = explode(',', $request->input($role['name']));
                foreach ($userIds as $id) {
                    ProjectUser::create(['project_id'=>$project->id,'user_id'=>$id, 'role_id'=>$role['id']]);
                }
            }
        }

        return $project;
    }

    public function show(Project $project)
    {
        return response()->json($project);
    }

    public function update(ProjectRequest $request, Project $project)
    {
        $data = $request->all();
        $project->update($data);
        return $project;
    }

    public function destroy(Project $project)
    {
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
        return response()->json(['developer'=>$developers,'bde'=>$bde,'pm'=>$pm,'designer'=>$designer,'qa'=>$qa]);
    }
}
