<?php

namespace App\Http\Controllers;

use App\Models\Rate;
use App\Models\Tutor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RateController extends Controller
{
    //
    public function store($id,Request $request){
        $user=Auth::user()->id;
        $tutor= Tutor::findOrFail($id);
        Rate::create([
            'tutor_id'=>$tutor->id,
            'user_id'=>$user,
            'comment'=>$request->comment,
            'rate'=>$request->rate,
        ]);
        return redirect()->back()->with('success','Rated'); 
    }

    
}
