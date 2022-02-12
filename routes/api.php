<?php

use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\HolidayController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ProjectTaskController;
use App\Http\Controllers\Api\ServiceTicketController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UserLeaveController;
use App\Models\Holiday;
use App\Models\User;
use App\Models\UserLeave;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();
    $user->role = $user->roles->first()->name;
    unset($user->roles);
    $notManagementRoles = !auth()->user()->hasRole('super-admin') && !auth()->user()->hasRole('admin') && !auth()->user()->hasRole('hr');

    $events = [];
    $holidays = Holiday::whereRaw('YEAR(holiday_date) >= ?',[date("m")])->get();
    foreach ($holidays as $key => $holiday) {
        array_push($events, [ "title" => $holiday->title, "start" => $holiday->holiday_date, 'backgroundColor' =>'rgb(254 240 138)','textColor' =>'#000' ]);
    }

    $users = User::select(['id','first_name','last_name','join_date','dob'])->where('user_status', 1)->get();
    foreach ($users as $key => $user) {
        if($user->dob) {
            array_push($events, [ "groupId" => $user->id, "title" => $user->first_name . ' ' . $user->last_name ."'s Birthday", "start" => $user->dob, 'backgroundColor' =>'#3b82f6','textColor' =>'#000' ]);
        }
        if($user->join_date) {
            array_push($events, [ "groupId" => $user->id, "title" => $user->first_name . ' ' . $user->last_name ."'s Work Anniversary", "start" => $user->join_date, 'backgroundColor' =>'#bfdbfe','textColor' =>'#000' ]);
        }
    }

    $leaves = UserLeave::with(['user' => function($query) {
        return $query->select(['id','first_name','last_name']);
    }])->where('status','!=',"Rejected")->whereRaw('MONTH(start_date) >= ?',[date("m")]);
    if ($notManagementRoles) {
        $leaves = $leaves->where('user_id', auth()->user()->id)->get();
    } else {
        $leaves = $leaves->get();
    }

    foreach ($leaves as $key => $leave) {
        $background =  "#facc15";
        if ($leave->status == 'Approved') {
            $background =  "#eab308";
        } elseif ($leave->status == 'Rejected') {
            $background =  "#d97706";
        }
        $description = $leave->user->first_name . ' ' . $leave->user->last_name;

        $start = Carbon::createFromFormat('Y-m-d', $leave->start_date);
        $end = Carbon::createFromFormat('Y-m-d', $leave->end_date);
        $diff_in_days = $end->diffInDays($start);
        $date = $leave->start_date;
        for($i = 0; $i <= $diff_in_days; $i++) {
            array_push($events, [ "title" => $description, "start" => $date, 'backgroundColor' =>$background,'textColor' =>'#000' ]);
            $date = Carbon::createFromFormat('Y-m-d', $date)->addDays(1)->toDateString();
        }
    }
    $user['events'] = $events;
    return $user;
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('roles', RoleController::class);
    Route::get('permissions', [RoleController::class,'permissions'])->name("role-permissions");
    Route::apiResource('users', UserController::class);
    Route::get('user/roles', [RoleController::class,'allRoles'])->name("allRoles");
    Route::apiResource('companies', CompanyController::class);
    Route::get('projects/{slug}/{page}', [ProjectController::class,'getBySlug'])->name("getBySlug");
    Route::post('projects/{project_id}/store-task', [ProjectTaskController::class,'storeTask'])->name("storeTask");
    Route::get('tasks/assigned-to-users', [ProjectTaskController::class,'assignedToUsers'])->name("assignedToUsers");
    Route::get('tasks/{id}', [ProjectTaskController::class,'show'])->name("show");
    Route::put('tasks/{id}', [ProjectTaskController::class,'update'])->name("update");
    Route::put('tasks/{id}/update-status', [ProjectTaskController::class,'updateUtatus'])->name("updateUtatus");
    Route::get('tasks/{project_id}/project', [ProjectTaskController::class,'getTasks'])->name("getTasks");
    Route::apiResource('projects', ProjectController::class);
    Route::get('project/users', [ProjectController::class,'getDifferentRoleUsers'])->name("getDifferentRoleUsers");
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('products', ProductController::class);

    Route::apiResource('service-tickets', ServiceTicketController::class);
    Route::apiResource('holidays', HolidayController::class);
    Route::apiResource('user-leaves', UserLeaveController::class);
});
