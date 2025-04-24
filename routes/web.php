<?php

use App\Http\Controllers\ActeurController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\SearchController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Projet
    Route::get('/projects',[ProjetController::class,'index'])->name('projets.index');
    Route::post('/projects',[ProjetController::class,'store'])->name('projets.store');
    Route::patch('/project/{projet_id}',[ProjetController::class,'update'])->name('projets.update');
    Route::delete('/project/{projet_id}',[ProjetController::class,'destroy'])->name('projet.destroy');
    //Acteur
    Route::get('/project/{projet_id}/acteurs',[ActeurController::class,'index'])->name('acteurs.index');    
    Route::post('/project/{projet_id}/acteurs',[ActeurController::class,'store'])->name('acteurs.store');
    Route::post('/acteur/{acteur_id}',[ActeurController::class,'destroy'])->name('acteur.destroy');
    Route::patch('/acteur/{acteur_id}',[ActeurController::class,'update'])->name('acteurs.update');
    //Search
    Route::get('/search/{keyword}',SearchController::class)->name('search');
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
