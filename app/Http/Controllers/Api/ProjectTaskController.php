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

class ProjectTaskController extends Controller
{
    public function storeTask(Request $request, $project_id) {
        $projectTask = ProjectTask::create([
            'title' => $request->input('title'),
            'project_id' => $project_id,
            'user_id' => $request->user()->id,
        ]);
        return $projectTask;
    }

    public function show(Request $request, $id) {
        $projectTask = ProjectTask::with('project')->find($id);
        return $projectTask;
    }

    public function assignedToUsers() {
        $roles = ['developer','designer','qa','trainee'];
        $assignedUsers = [];

        foreach ($roles as $role) {
            $users = User::select('id', 'first_name', 'last_name')->role($role)->where('user_status', 1)->get()->toArray();
            foreach ($users as $user) {
                array_push($assignedUsers, $user);
            }
        }
        return response()->json($assignedUsers);
    }

    public function update(Request $request, $id) {
        $projectTask = ProjectTask::find($id);
        $projectTask->update($request->all());
        return $projectTask;
    }

    public function getTasks(Request $request, $project_id) {
        $createdTask = ProjectTask::with('project')->where('project_id',$project_id)->where('task_status','Created')->get();
        $activeTask = ProjectTask::with('project')->where('project_id',$project_id)->whereIn('task_status',['Active','Started','Paused'])->get();
        $completedTask = ProjectTask::with('project')->where('project_id',$project_id)->where('task_status','Completed')->get();
        return [
            'created' => $createdTask,
            'active' => $activeTask,
            'completed' => $completedTask,
        ];
    }
}
