<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    public $guard_name = 'sanctum';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'user_code',
        'email',
        'password',
        'phone_number',
        'emergency_phone_number',
        'profile_image',
        'gender',
        'marital_status',
        'dob',
        'join_date',
        'resign_date',
        'resume_file',
        'address',
        'city',
        'state',
        'country',
        'user_status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    protected static function boot()
    {
        parent::boot();

        static::saved(function ($user) {
            $user->user_code = static::generateUserCode($user->id);
        });
    }

    protected static function generateUserCode($id)
    {
        return "SIS".str_repeat("0", 5-strlen($id)) . $id;
    }


    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_users');
    }
}
