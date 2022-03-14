<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ProjectTaskHistory
 *
 * @property int $id
 * @property string $description
 * @property int $task_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTaskHistory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProjectTaskHistory extends Model
{
    use HasFactory;

    protected $fillable = ['description','task_id'];
}
