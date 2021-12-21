<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTaskTime extends Model
{
    use HasFactory;

    protected $fillable = ['task_id','task_status','time_duration'];
}
