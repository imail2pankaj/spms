<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ServiceTicket
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $type
 * @property string $priority
 * @property string $status
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket query()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket wherePriority($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceTicket whereUserId($value)
 * @mixin \Eloquent
 */
class ServiceTicket extends Model
{
    use HasFactory;

    protected $fillable = ['title','description','type','priority','status','user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
