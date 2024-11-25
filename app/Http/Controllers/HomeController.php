<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use App\Models\Tutor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    //

    public function Authenticated(){
        
      $user = Auth::user();
      $tutors=Tutor::where('status',1)->paginate(3);

      return Inertia::render("LandingPage", ["user"=> $user,"tutors"=> $tutors]);
    }
    public function Dashboard(){
        $user = Auth::user();
        return Inertia::render('Student/Dashboard',['user'=> $user]);
    }

    public function index() {
        $tutors=Tutor::where('status',1)->paginate(3);
        $user= Auth::user();
        return Inertia::render('LandingPage',['tutors'=>$tutors,'user'=>$user]);
    }
    public function HowTo(){
        return Inertia::render('HowTo');
    }
}
