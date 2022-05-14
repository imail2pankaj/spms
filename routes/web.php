<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Mail\AccountCreated;
use App\Models\ProjectTaskTime;
use App\Models\User;
use App\Notifications\NewAccountCreated;
use Illuminate\Support\Facades\Mail;

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

Route::get('/', function () {
    // $user = User::find(22);
    // $user->notify(new NewAccountCreated(['first_name'=> $user->first_name,'email'=>$user->email,'password'=>123456]));
    return view('welcome');
    // $user = ['first_name'=>'Pankaj', 'email'=>'imail2pankaj@gmail.com','password'=>'1234'];

    // Mail::to('imail2pankaj@gmail.com')->send(new AccountCreated($user));
    // return view('emails.account-created',compact('user'));
});

Route::get('/app', [AppController::class, 'index'])->name('app');
Route::get('/app/{vue_capture?}', [AppController::class, 'app'])->where('vue_capture', '[\/\w\.\-\ \&\=]*')->middleware('auth:sanctum');

require __DIR__.'/auth.php';
