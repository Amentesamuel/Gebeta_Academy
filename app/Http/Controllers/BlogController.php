<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    //
    public function index(){
        $blogs=Blog::orderBy("created_at","desc")->paginate(10);
        return Inertia::render('Blog',['blogs'=>$blogs]);
    }
    public function singleBlog($id){
        $blog=Blog::find($id);
        return Inertia::render('BlogDetail',['blog'=>$blog]);
    }
}
