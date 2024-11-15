<?php

namespace App\Http\Controllers;

use App\Models\Tutor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TutorController extends Controller
{
    //
    public function index(){
        $tutor=Tutor::all();
        return Inertia::render('Tutor')->with('tutor',$tutor);
    }
}
