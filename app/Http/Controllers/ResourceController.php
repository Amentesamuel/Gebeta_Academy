<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResourceController extends Controller
{
    //
    public function index(){
        $resources=Resource::paginate(9);

        return Inertia::render('ResourcePage',['resources'=>$resources]);
    }
    public function singleResource($id){
        
        $resource=Resource::find($id);
        return Inertia::render('BookDetail',['resources'=>$resource]);
    }
}
