<?php

use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ProjectTaskController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    return $user;
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('roles',RoleController::class);
    Route::get('permissions', [RoleController::class,'permissions'])->name("role-permissions");
    Route::apiResource('users',UserController::class);
    Route::get('user/roles', [RoleController::class,'allRoles'])->name("allRoles");
    Route::apiResource('companies',CompanyController::class);
    Route::get('projects/{slug}/{page}', [ProjectController::class,'getBySlug'])->name("getBySlug");
    Route::post('projects/{project_id}/store-task', [ProjectTaskController::class,'storeTask'])->name("storeTask");
    Route::get('tasks/assigned-to-users', [ProjectTaskController::class,'assignedToUsers'])->name("assignedToUsers");
    Route::get('tasks/{id}', [ProjectTaskController::class,'show'])->name("show");
    Route::put('tasks/{id}', [ProjectTaskController::class,'update'])->name("update");
    Route::get('tasks/{project_id}/project', [ProjectTaskController::class,'getTasks'])->name("getTasks");
    Route::apiResource('projects',ProjectController::class);
    Route::get('project/users', [ProjectController::class,'getDifferentRoleUsers'])->name("getDifferentRoleUsers");
    Route::apiResource('categories',CategoryController::class);
    Route::apiResource('products',ProductController::class);
});
