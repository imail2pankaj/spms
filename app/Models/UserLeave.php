<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLeave extends Model
{
    use HasFactory;

    protected $fillable = ['description','start_date','end_date','user_id','comment','type','status'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
