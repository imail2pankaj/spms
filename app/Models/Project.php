<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectUser;
use Illuminate\Support\Str;

/**
 * App\Models\Project
 *
 * @property int $id
 * @property string|null $project_code
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string|null $start_date
 * @property string|null $end_date
 * @property int $approx_hours
 * @property string $internal_non_project
 * @property string $project_type
 * @property int $project_cost
 * @property string $project_status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProjectAttachment[] $attachments
 * @property-read int|null $attachments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $bdes
 * @property-read int|null $bdes_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $customers
 * @property-read int|null $customers_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $designers
 * @property-read int|null $designers_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $developers
 * @property-read int|null $developers_count
 * @property-read \App\Models\ProjectNote|null $note
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $pms
 * @property-read int|null $pms_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $qas
 * @property-read int|null $qas_count
 * @method static \Illuminate\Database\Eloquent\Builder|Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereApproxHours($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereInternalNonProject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereProjectCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereProjectCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereProjectStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereProjectType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Project extends Model
{
    use HasFactory;
    // 'Internal','Non','Client'
    protected $fillable = ['project_code','title','slug','description','start_date','end_date','approx_hours','internal_non_project','project_type','project_cost','project_status'];


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

    public function note()
    {
        return $this->hasOne(ProjectNote::class);
    }

    public function attachments()
    {
        return $this->hasMany(ProjectAttachment::class)->orderBy('id','desc');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            $project->slug = Str::slug($project->title);
        });
    }
}
