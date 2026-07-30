<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/project-structure', function () {
    return Inertia::render('demo/Structure');
})->name('project-structure');

Route::get('/authenticated-layout', function () {
    return Inertia::render('demo/AppPage');
})->name('app-layout');
