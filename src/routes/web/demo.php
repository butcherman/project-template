<?php

use Illuminate\Support\Facades\Route;

/*
|---------------------------------------------------------------------------
| Standard Components
|---------------------------------------------------------------------------
*/
Route::inertia('/typography', 'demo/TypographyDemo');
Route::inertia('/alerts', 'demo/AlertsDemo');
Route::inertia('/badges', 'demo/BadgesDemo');
Route::inertia('/buttons', 'demo/ButtonsDemo');
Route::inertia('/card', 'demo/CardDemo');
Route::inertia('/collapse', 'demo/CollapseDemo');
Route::inertia('/deferred-loader', 'demo/DeferredLoaderDemo');
Route::inertia('/drawer', 'demo/DrawerDemo');
Route::inertia('/loaders', 'demo/LoaderDemo');
Route::inertia('/modal', 'demo/ModalDemo');
Route::inertia('/overlay', 'demo/OverlayDemo');
Route::inertia('popup-alerts', 'demo/PopupAlertDemo');

/*
|---------------------------------------------------------------------------
| Components for handling data sets
|---------------------------------------------------------------------------
*/
Route::inertia('/data-table', 'demo/DataTableDemo');
Route::inertia('/menu-list', 'demo/MenuListDemo');
Route::inertia('/paginate', 'demo/PaginateDemo');
Route::inertia('/resource-list', 'demo/ResourceListDemo');
Route::inertia('/table-stacked', 'demo/TableStackedDemo');

/*
|---------------------------------------------------------------------------
| Directives
|---------------------------------------------------------------------------
*/
Route::inertia('/copy-directive', 'demo/CopyDirectiveDemo');
Route::inertia('/tooltip-directive', 'demo/TooltipDirectiveDemo');

/*
|---------------------------------------------------------------------------
| Form Components
|---------------------------------------------------------------------------
*/
Route::inertia('/form-component', 'demo/FormComponentDemo');
Route::inertia('/form-auto-complete-input', 'demo/FormAutoCompleteInputDemo');
Route::inertia('/form-date-picker-input', 'demo/FormDatePickerInputDemo');
Route::inertia('/form-multi-select-input', 'demo/FormMultiSelectInputDemo');
Route::inertia('/form-switch-input', 'demo/FormSwitchInputDemo');
Route::inertia('/form-text-input', 'demo/FormTextInputDemo');

Route::post('/submit-form', function () {
    return back()->with('success', 'success');
});
