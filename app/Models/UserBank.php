<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBank extends Model
{
    use HasFactory;

    protected $fillable = ['account_name','account_number','bank_name','branch_name','ifsc_code','pan_number','user_id'];
}
