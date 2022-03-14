<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ProjectUpdate
 *
 * @property int $id
 * @property int $user_id
 * @property int $project_id
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectUpdate whereUserId($value)
 * @mixin \Eloquent
 */
class ProjectUpdate extends Model
{
    use HasFactory;

    protected $fillable = ['project_id','user_id','description'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
