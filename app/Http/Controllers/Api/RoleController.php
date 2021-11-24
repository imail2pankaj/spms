<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;
use Illuminate\Support\Facades\DB as FacadesDB;

class RoleController extends Controller
{

    public function permissions()
    {
        return Permission::get();
    }

    public function index(Request $request)
    {
        return Role::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permission' => 'required',
        ]);
    
        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permission'));
        return $role;
    }

    public function show(Role $role)
    {
        $rolePermissions = FacadesDB::table("role_has_permissions")->where("role_has_permissions.role_id",$role->id)
        ->pluck('role_has_permissions.permission_id')
        ->all();
        $role->permission = $rolePermissions;
        return $role;
    }

    public function update(Request $request, Role $role)
    {
        $this->validate($request, [
            'name' => 'required',
            'permission' => 'required',
        ]);
    
        $role->update(['name' => $request->input('name')]);

        $role->syncPermissions($request->input('permission'));

        return $role;
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return response()->noContent();
    }
}

