<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    //
    protected $fillable=[
        'user_id',
        'gender',
        'phone',
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
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

  
    protected $casts = [
        'available_days' => 'array',
        
    ];
}
