<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\UserLeave
 *
 * @property int $id
 * @property string $description
 * @property string $start_date
 * @property string|null $end_date
 * @property int $user_id
 * @property string|null $comment
 * @property string $type
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserLeave whereUserId($value)
 * @mixin \Eloquent
 */
class UserLeave extends Model
{
    use HasFactory;

    protected $fillable = ['description','start_date','end_date','user_id','comment','type','status'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public static function pendingLeaveThisYear($user_id) {
        $leaves = self::select('start_date','end_date','type')->where('status',"Approved")->whereRaw('YEAR(start_date) >= ?',[date("Y")])->where('user_id', $user_id)->get();
        $pendingLeaves = 12;
        foreach ($leaves as $key => $leave) {
            $start = Carbon::createFromFormat('Y-m-d', $leave->start_date);
            $end = Carbon::createFromFormat('Y-m-d', $leave->end_date);
            $diff_in_days = $end->diffInDays($start);
            if($leave->type == 'Half'){
                $pendingLeaves = $pendingLeaves - 0.5;
            } else {
                $pendingLeaves = $pendingLeaves - $diff_in_days;
            }
        }
        return $pendingLeaves;
    }
}
