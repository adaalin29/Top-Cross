<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@home');

Route::get('/contact','ContactController@contact');
Route::post('mail_contact','ContactController@mail_contact');
Route::post('newsltetter_register','ContactController@newsltetter_register');
Route::post('send_request','CourseController@send_request');

// plata
Route::post('buy_voucher','PaymentController@sendOrderVoucher');
Route::post('/confirm-order', 'PaymentController@confirm_order');
Route::get('return-order', 'PaymentController@success');

Route::post('/confirm-order-schedule', 'PaymentController@confirm_order_schedule');






Route::get('/about','AboutController@about');

Route::get('/testimonials','TestimonialsController@testimonials');


Route::get('/rent','RentController@rent');
Route::get('/bike/{url_slug}','RentController@rent_single');

Route::get('/guided','GuidedController@guided');
Route::get('/guided-details/{url_slug}','GuidedController@guidedDetails');

Route::post('/rent-bike', 'RentController@do_rent');
Route::post('/request-event', 'EventsController@request_event');


Route::get('/offroad','OffroadController@offroad');
Route::get('/offroad_details','OffroadController@offroad_details');
Route::post('/show_video','OffroadController@show_video');

Route::get('/course','CourseController@course');
Route::get('/course-detail/{url_slug}','CourseController@courseDetail');

Route::get('/search_bike','RentController@search');

Route::get('/gallery','GalleryController@photos');
Route::get('/events','EventsController@events');

Route::get('/terms','TermsController@terms');
Route::get('/policy','TermsController@politica');
Route::get('/cookies','TermsController@cookies');

Route::get('locale/{locale}', function($locale) {
    Session::put('locale', $locale);
    return redirect()->back();
  });

  Route::get('/email', function () {
    return view('email');
});

Route::get('/storage/thumb/{query}/{file?}', 'ThumbController@index')
->where([
    'query' => '[A-Za-z0-9\:\;\-]+',
    'file'  => '[A-Za-z0-9\/\.\-\_]+',
])
->name('thumb');



