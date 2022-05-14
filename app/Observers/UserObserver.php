<?php

namespace App\Observers;

use App\Models\User;
use App\Models\UserBank;
use Illuminate\Support\Facades\DB;

class UserObserver
{
    /**
     * Handle the User "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user)
    {
        $user->assignRole(request()->input('roles'));

        $user->update([
            "user_code" => "SIS" . str_repeat("0", 5 - strlen($user->id)) . $user->id
        ]);
        UserBank::create([
            "user_id" => $user->id,
            "account_name" => request()->input("account_name"),
            "account_number" => request()->input("account_number"),
            "bank_name" => request()->input("bank_name"),
            "branch_name" => request()->input("branch_name"),
            "ifsc_code" => request()->input("ifsc_code"),
            "pan_number" => request()->input("pan_number"),
        ]);
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        $user->assignRole(request()->input('roles'));

        DB::table('model_has_roles')->where('model_id',$user->id)->delete();
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the User "restored" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
