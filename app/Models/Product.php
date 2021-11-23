<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name','slug','description','short_description','image','regular_price','sale_price','category_id','status'];

    protected $appends = ['category_name'];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function getCategoryNameAttribute() {
        if($this->attributes['category_id'] != 0) {
            return Category::find($this->attributes['category_id'])->name;
        }
        return null;
    }

    
    protected static function boot() {
        parent::boot();

        static::creating(function ($category) {
            $category->slug = Str::slug($category->name);
        });
    }
}
