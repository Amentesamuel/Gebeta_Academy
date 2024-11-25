<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Tutor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class TutorController extends Controller
{
    //
    public function index(){
      
        return Inertia::render('Tutor',['tutors'=>Tutor::where('status',1)->get()]);
    }
    public function singleTutor($id){
        $tutor = Tutor::find($id);
        return Inertia::render('detailPage',['tutor'=>$tutor]);
    }
    public function store(Request $request){
        dd($request->all());
        $request->validate([
            'name'=> 'required',
            'email'=> 'required||unique:users,email',
            'gender'=>'required',
            'phone'=>'required',
            'address'=>'required',
            'education'=>'required',
            'subject'=> 'required',
            'available_days'=> 'required',
            'experience'=> 'required',
            'image'=> 'required',
            'description'=>'required',
        ]);
        
       $user = Auth::user();
    //    User::where('id', $user->id)->update([
    //         'name'=> $request->name,
    //         'email'=> $request->email,
    //     ]);
        $image = $request->file('image');
        dd($image);
        $slug = Str::slug($request->image);
        if (isset($image)) {
            $currentDate = Carbon::now()->toDateString();
            $idImageBack = $slug . '-' . $currentDate . '-' . uniqid() . '.' . $image->getClientOriginalExtension();
            if (!file_exists('profileimage')) {
                mkdir('profileimage', 0777, true);
            }
            $image->move('profileimage', $idImageBack);
        } else {
            $idImageBack = "default.png";
        }
        Tutor::create(
            [
                'user_id'=>$user->id,
                'gender'=> $request->gender,
                'phone'=> $request->phone,
                'address'=>$request->address,
                'education'=> $request->education,
                'subject'=> $request->subject,
                'available_days'=> json_encode($request->available_days),
                'experience'=> $request->experience,
                'image'=> $idImageBack,
                'description'=> $request->description,
                'status'=>false,
            ]
            );
    }
    public function Dashboard(){
        return Inertia::render('Tutor/Dashboard');
    }
    public function profile(){
        $user=Auth::user();
        return Inertia::render('Tutor/Profile',['user'=>$user]);
    }
    public function apply(){
        $user=Auth::user();
        return Inertia::render('Tutor/Apply',['user'=>$user]);
    }
    public function edit(){
        return Inertia::render('Tutor/EditCV');
    }
}
