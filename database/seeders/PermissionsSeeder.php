<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Hash;

class PermissionsSeeder extends Seeder
{
    /**
     * Create the initial roles and permissions.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $role3 = Role::create(['guard_name' => 'sanctum', 'name' => 'super-admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create permissions
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Edit User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Delete User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Add User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'View User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'List User']);

        // create permissions
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Edit Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Delete Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Add Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'View Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'List Role']);

        // create permissions
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Edit Project']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Delete Project']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'Add Project']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'View Project']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'List Project']);

        // create roles and assign existing permissions
        $role1 = Role::create(['guard_name' => 'sanctum', 'name' => 'admin']);
        $role1->givePermissionTo('Edit Role');
        $role1->givePermissionTo('Delete Role');
        $role1->givePermissionTo('Add Role');
        $role1->givePermissionTo('View Role');
        $role1->givePermissionTo('List Role');
        $role1->givePermissionTo('Edit Project');
        $role1->givePermissionTo('Delete Project');
        $role1->givePermissionTo('Add Project');
        $role1->givePermissionTo('View Project');
        $role1->givePermissionTo('List Project');

        $role2 = Role::create(['guard_name' => 'sanctum', 'name' => 'pm']);
        $role2->givePermissionTo('Edit Project');
        $role2->givePermissionTo('Delete Project');
        $role2->givePermissionTo('Add Project');
        $role2->givePermissionTo('View Project');
        $role2->givePermissionTo('List Project');

        $user = \App\Models\User::create([
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'admin@scenicitsolutions.com',
            'password' => Hash::make('123456789'),
            'phone_number' => '9999999999',
            'gender' => 1,
            'marital_status' => 1,
            'user_status' => 1,
        ]);
        $user->assignRole($role3);

        // create demo users
        $user = \App\Models\User::create([
            'first_name' => 'Pankaj',
            'last_name' => 'Makwana',
            'email' => 'pankaj@scenicitsolutions.com',
            'password' => Hash::make('123456789'),
            'phone_number' => '9427940785',
            'gender' => 1,
            'marital_status' => 1,
            'user_status' => 1,
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::create([
            'first_name' => 'Piyush',
            'last_name' => 'Vasoya',
            'email' => 'piyush@scenicitsolutions.com',
            'password' => Hash::make('123456789'),
            'phone_number' => '9876543210',
            'gender' => 1,
            'marital_status' => 1,
            'user_status' => 1,
        ]);
        $user->assignRole($role1);

        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'hr']);
        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'qa']);
        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'developer']);
        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'designer']);
        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'trainee']);
        $role = Role::create(['guard_name' => 'sanctum', 'name' => 'customer']);
    }
}