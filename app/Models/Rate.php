<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    //
    protected $fillable = ['tutor_id', 'user_id', 'rate', 'comment'];

    public function tutor()
    {
        return $this->belongsTo(Tutor::class,'tutor_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
