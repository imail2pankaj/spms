<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','user_id','milestone_id','title','description','due_date','task_type','priority','completion_rate','task_status'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
