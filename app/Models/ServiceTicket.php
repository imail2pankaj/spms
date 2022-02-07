<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTicket extends Model
{
    use HasFactory;

    protected $fillable = ['title','description','type','priority','status','user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
