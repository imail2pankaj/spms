<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 64);
            $table->string('middle_name', 64)->nullable();
            $table->string('last_name', 64);
            $table->string('user_code', 16)->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone_number', 32);
            $table->string('emergency_phone_number', 32)->nullable();
            $table->string('profile_image', 32)->nullable();
            $table->tinyInteger('gender')->default(0)->comment('0 - Female, 1 - Male, 2 - Other');
            $table->tinyInteger('marital_status')->default(0)->comment('0 - Unmarried, 1 - Married, 2 - Divorced');
            $table->date('dob')->nullable();
            $table->date('join_date')->nullable();
            $table->date('resign_date')->nullable();
            $table->string('resume_file')->nullable();

            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();

						$table->tinyInteger('user_status')->default(0)->comment('0 - In-Active, 1 - Active');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
