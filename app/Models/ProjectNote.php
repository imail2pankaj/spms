<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ProjectNote
 *
 * @property int $id
 * @property int $project_id
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectNote whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProjectNote extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','description'];
}
