<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ProjectMilestone
 *
 * @property int $id
 * @property int $project_id
 * @property string $title
 * @property string|null $start_date
 * @property string|null $end_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectMilestone whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProjectMilestone extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','title','start_date','end_date'];
}
