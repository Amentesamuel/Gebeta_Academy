<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
    //
    protected $fillable = [
        'student_id',
        'tutor_id',

    ];
    public function student(){
        return $this->belongsTo(Student::class,'student_id');

    }

    public function tutor(){
        return $this->belongsTo(Tutor::class,'tutor_id');
    }
}
