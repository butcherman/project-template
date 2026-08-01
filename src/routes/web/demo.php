<?php

use Illuminate\Support\Facades\Route;

/*
|---------------------------------------------------------------------------
| Standard Components
|---------------------------------------------------------------------------
*/
Route::inertia('/typography', 'demo/TypographyDemo');
Route::inertia('/badges', 'demo/BadgesDemo');
Route::inertia('/buttons', 'demo/ButtonsDemo');
Route::inertia('/card', 'demo/CardDemo');
Route::inertia('/collapse', 'demo/CollapseDemo');

/*
|---------------------------------------------------------------------------
| Components for handling data sets
|---------------------------------------------------------------------------
*/
Route::inertia('/data-table', 'demo/DataTableDemo');
Route::inertia('/menu-list', 'demo/MenuListDemo');
Route::inertia('/resource-list', 'demo/ResourceListDemo');
Route::inertia('/table-stacked', 'demo/TableStackedDemo');
