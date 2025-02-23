<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/components', function () {
    return Inertia::render('Examples/Index');
})->name('components.index');
