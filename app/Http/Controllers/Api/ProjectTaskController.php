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

    public function update(Request $request, $id) {
        $projectTask = ProjectTask::find($id);
        $projectTask->update($request->all());
        return $projectTask;
    }
}
