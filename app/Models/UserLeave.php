<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
