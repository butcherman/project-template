<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/typography', function () {
    return Inertia::render('demo/Typography');
});
