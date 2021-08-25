<?php

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('offroaddetails', 'OffroadDetailsCrudController');
    Route::crud('newsletters', 'NewslettersCrudController');
    Route::crud('offroadgallery', 'OffroadGalleryCrudController');
    Route::crud('videogalleries', 'VideoGalleriesCrudController');
    Route::crud('statice', 'StaticeCrudController');
    Route::crud('testimonial', 'TestimonialCrudController');
    Route::crud('gallery', 'GalleryCrudController');
    Route::crud('gallery', 'GalleryCrudController');
    Route::crud('coursecategories', 'CourseCategoriesCrudController');
    Route::crud('courses', 'CoursesCrudController');
    Route::crud('trip', 'TripCrudController');
    Route::crud('experience', 'ExperienceCrudController');
    Route::crud('team', 'TeamCrudController');
    Route::crud('bike', 'BikeCrudController');
    Route::crud('tag', 'TagCrudController');
    Route::crud('voucher', 'VoucherCrudController');
    Route::crud('orders', 'OrdersCrudController');

    Route::get('dashboard','DashboardController@dashboard');
    Route::get('calendar','CalendarController@calendar');
    Route::get('get_schedules','CalendarController@get_schedules');

    Route::post('checkOrderEdit','OrdersCrudController@checkOrderEdit');
    Route::crud('schedule', 'ScheduleCrudController');
    Route::crud('event', 'EventCrudController');
}); // this should be the absolute last line of this file