<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ProjectAttachment
 *
 * @property int $id
 * @property int $project_id
 * @property string $title
 * @property string $file_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereFileName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectAttachment whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProjectAttachment extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','title','file_name'];
}
