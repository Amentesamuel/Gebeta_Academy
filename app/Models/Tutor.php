<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    //
    protected $fillable=[
        'name',
        'gender',
        'phone',
        'email',
        'address',
        'education',
        'subject',
        'available_days',
        'experience',
        'slug',
        'image',
        'description',
        'status'
    ];
}
