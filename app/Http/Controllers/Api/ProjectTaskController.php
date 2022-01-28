<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use App\Models\ProjectAttachment;
use App\Models\ProjectMilestone;
use App\Models\ProjectNote;
use App\Models\ProjectTask;
use App\Models\ProjectTaskHistory;
use App\Models\ProjectTaskTime;
use App\Models\ProjectUpdate;
use App\Models\ProjectUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProjectTaskController extends Controller
{
    public function storeTask(Request $request, $project_id)
    {
        $projectTask = ProjectTask::create([
            'title' => $request->input('title'),
            'project_id' => $project_id,
            'user_id' => $request->user()->id,
        ]);
        $projectTask->history()->create(['description' => 'Task has Created']);
        return $projectTask;
    }

    public function show(Request $request, $id)
    {
        $projectTask = ProjectTask::with('project', 'history')->find($id);
        return $projectTask;
    }

    public function assignedToUsers()
    {
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

    public function update(Request $request, $id)
    {
        $projectTask = ProjectTask::find($id);
        $projectTask->update($request->all());
        $projectTask->history()->create(['description' => 'Task Details has Updated']);

        return $projectTask;
    }

    public function updateUtatus(Request $request, $id)
    {
        $projectTask = ProjectTask::find($id);
        $data = ['task_status' => $request->input('status')];
        $projectTask->update($data);

        $taskStatus = ['Active','Started','Paused'];

        if (in_array($request->input('status'), $taskStatus)) {
            $taskTime = ProjectTaskTime::create([
                "task_id" => $id,
                "task_status" => ($request->input('status') == "Started" || $request->input('status') == "Active") ? "Started" : "Paused"
            ]);
            if ($request->input('status') === 'Paused') {
                $activeTaskTime = ProjectTaskTime::where('task_id', $id)->where('task_status', 'Started')->latest()->first();
                $timeDifference = strtotime($taskTime->created_at) - strtotime($activeTaskTime->created_at);
                $taskTime->update(['time_duration' => $timeDifference]);
                $totalTime=ProjectTaskTime::where('task_id', $id)->where('task_status', 'Paused')->sum('time_duration');
                $projectTask->update(['total_time' => $totalTime]);
            }
        }
        $projectTask->history()->create(['description' => 'Task has ' . $request->input('status')]);

        $returnData = [
            'id' => $projectTask->id,
            'project_id' => $projectTask->project_id,
            'user_id' => $projectTask->user_id,
            'title' => $projectTask->title,
            'total_time' => $projectTask->total_time,
            'task_status' => $projectTask->task_status,
            'time' => strtotime(date("Y-m-d H:i:s"))
        ];
        return $returnData;
    }

    public function getTasks(Request $request, $project_id)
    {
        return ProjectTask::getProjectTasks($project_id);
    }
}
