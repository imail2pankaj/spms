<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\UserBank
 *
 * @property int $id
 * @property string|null $account_name
 * @property string|null $account_number
 * @property string|null $bank_name
 * @property string|null $branch_name
 * @property string|null $ifsc_code
 * @property string|null $pan_number
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereAccountName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereBankName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereBranchName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereIfscCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank wherePanNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserBank whereUserId($value)
 * @mixin \Eloquent
 */
class UserBank extends Model
{
    use HasFactory;

    protected $fillable = ['account_name','account_number','bank_name','branch_name','ifsc_code','pan_number','user_id'];
}
