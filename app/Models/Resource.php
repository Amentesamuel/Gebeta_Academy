<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    //
    protected $fillable=[
        'title',
        'slug',
        'book_cover',
        'author',
        'description',
        'file',
        
    ];
}