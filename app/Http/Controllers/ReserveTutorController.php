<?php

namespace App\Http\Controllers;

use App\Models\Reserve;
use App\Models\Student;
use App\Models\Tutor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReserveTutorController extends Controller
{
    //
    public function reserve($id){
        $user=Auth::user()->id;
        $tutor= Tutor::findOrFail($id);
        Reserve::create([
            'tutor_id'=>$tutor->id,
            'student_id'=>$user 
        ]);
        return redirect()->back()->with('success','Reserved');

    }
}
