<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ResourceController extends Controller
{
    //
    public function index(){
        $user=Auth::user();
        $resources=Resource::paginate(9);

        return Inertia::render('ResourcePage',['resources'=>$resources,'user'=>$user]);
    }
    public function singleResource($id){
        $user=Auth::user();
        
        $resource=Resource::find($id);
        return Inertia::render('BookDetail',['resources'=>$resource,'user'=>$user]);
    }
}
