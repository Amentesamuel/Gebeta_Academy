<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\TutorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/about',[AboutController::class, 'index'])->name('about');
Route::get('/tutor',[TutorController::class, 'index'])->name('tutor');
Route::get('/tutor/{id}',[TutorController::class, 'singleTutor'])->name('tutor/{id}');
Route::get('/how-to',[HomeController::class, 'HowTo'])->name('how-to');
Route::get('/resource',[ResourceController::class, 'index'])->name('resource');
Route::get('/resource/{id}',[ResourceController::class, 'singleResource'])->name('resource/{id}');

Route::get('/contact',[ContactUsController::class, 'index'])->name('contact');
Route::get('/blog',[BlogController::class, 'index'])->name('blog');
Route::get('/blog/{id}',[BlogController::class, 'singleBlog'])->name('blog');





Route::middleware('auth')->group(function () {
    Route::get('/Auth', [HomeController::class, 'Authenticated'])->name('Auth');
    Route::get('/Userdashboard', [HomeController::class, 'Dashboard'])->name('Userdashboard');
    Route::get('/Tutordashboard',[TutorController::class,'Dashboard'])->name('TutorDashboard');
    Route::get('/Tutordashboard/profile',[TutorController::class,'profile'])->name('profile');
    Route::get('/Tutordashboard/apply',[TutorController::class,'apply'])->name('apply');
    Route::Post('/Tutordashboard/apply',[TutorController::class,'store'])->name('store');

    Route::get('/Tutordashboard/edit',[TutorController::class,'edit'])->name('edit.cv');
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
