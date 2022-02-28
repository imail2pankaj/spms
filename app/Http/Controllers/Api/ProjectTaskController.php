<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProjectTask;
use App\Models\ProjectTaskTime;
use App\Models\User;
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

        $taskStatus = ['Active','Started','Paused', 'Completed'];

        if (in_array($request->input('status'), $taskStatus)) {
            $status = $request->input('status') != "Completed" ? (($request->input('status') == "Started" || $request->input('status') == "Active") ? "Started" : "Paused") : 'Completed';
            $taskTime = ProjectTaskTime::create([
                "task_id" => $id,
                "task_status" => $status
            ]);
            if ($request->input('status') === 'Paused' || $request->input('status') === 'Completed') {
                $activeTaskTime = ProjectTaskTime::where('task_id', $id)->whereIn('task_status', ['Started','Active'])->latest()->first();
                $timeDifference = strtotime($taskTime->created_at) - strtotime($activeTaskTime->created_at);
                $taskTime->update(['time_duration' => $timeDifference]);
                $totalTime=ProjectTaskTime::where('task_id', $id)->whereIn('task_status', ['Paused','Completed'])->sum('time_duration');
                $projectTask->update(['total_time' => $totalTime]);
            }
        }
        $projectTask->history()->create(['description' => 'Task has ' . $request->input('status')]);

        $m = floor(($projectTask->total_time%3600)/60);
        $h = floor(($projectTask->total_time%86400)/3600);

        $returnData = [
            'id' => $projectTask->id,
            'project_id' => $projectTask->project_id,
            'user_id' => $projectTask->user_id,
            'title' => $projectTask->title,
            'total_time' => $projectTask->total_time,
            'task_status' => $projectTask->task_status,
            'time' => strtotime(date("Y-m-d H:i:s")),
            'total_time_converted' => ($h > 0 ? $h .' h ' : '') . $m .' m'
        ];
        return $returnData;
    }

    public function getTasks(Request $request, $project_id)
    {
        return ProjectTask::getProjectTasks($project_id);
    }
}
