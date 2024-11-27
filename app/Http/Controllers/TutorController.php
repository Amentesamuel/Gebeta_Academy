<?php

namespace App\Http\Controllers;

use App\Models\Rate;
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
        $user = Auth::user();
        // $tutor=Tutor::where("user_id", $user->id)->first();
      
        return Inertia::render('Tutor',['tutors'=>Tutor::where('status',1)->get(),'user'=>$user]);
    }
    public function singleTutor($id){
        
        $tutor = Tutor::find($id);
        $user=User::where('id', $tutor->user_id)->first();
       
        $avarageRate=Rate::where('tutor_id',$tutor->id)->avg('rate');
        $rate = number_format($avarageRate ?? 0, 2);
       
        
        return Inertia::render('TutorDetail',['tutor'=>$tutor,'user'=>$user,'rate'=>$rate]);
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
        $tutor=Tutor::where('user_id', $user->id)->first();
        
        return Inertia::render('Tutor/Profile',['user'=>$user,'tutor'=> $tutor]);
    }
    public function apply(){
        $user=Auth::user();
        return Inertia::render('Tutor/Apply',['user'=>$user]);
    }
    public function edit(){
        $user=Auth::user();
        $tutor=Tutor::where('user_id', $user->id)->first();
        return Inertia::render('Tutor/EditCV',['user'=>$user,'tutor'=> $tutor]);
    }
}
