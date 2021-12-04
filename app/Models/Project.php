<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectUser;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['project_code','title','slug','description','start_date','end_date','approx_hours','project_type','project_cost','project_status'];


    public function developers()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 6);
    }

    public function designers()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 7);
    }

    public function pms()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 3);
    }

    public function qas()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 5);
    }

    public function customers()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 9);
    }

    public function bdes()
    {
        return $this->belongsToMany(User::class, 'project_users')->where('role_id', 11);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            $project->slug = Str::slug($project->title);
        });
    }
}
