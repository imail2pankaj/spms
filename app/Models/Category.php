<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name','slug','description','short_description','image','parent_id', 'status'];

    protected $appends = ['parent_category_name'];

    
    // comany category
    public function getParentCategoryNameAttribute()
    {
        if($this->attributes['parent_id'] != 0) {
            return Category::find($this->attributes['parent_id'])->name;
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
