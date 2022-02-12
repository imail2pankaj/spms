<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLeavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_leaves', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->date('start_date')->index('index_start_date');
            $table->date('end_date')->index('index_end_date');
            $table->unsignedBigInteger('user_id');
            $table->index('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->text('comment')->nullable();
            $table->enum('type',['Full','Half'])->default('Half')->index('index_leave_type');
            $table->enum('status',['Applied','Approved','Rejected'])->default('Applied')->index('index_leave_status');
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
        Schema::dropIfExists('user_leaves');
    }
}
