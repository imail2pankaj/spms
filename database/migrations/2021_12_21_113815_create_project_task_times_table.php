<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTaskTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_task_times', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('task_id')->index('task_id');
            $table->enum('task_status', ['Started','Paused'])->default('Started')->index('task_status');
            $table->bigInteger('time_duration')->comment('Total seconds between start and pause task')->default(0);
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
        Schema::dropIfExists('project_task_times');
    }
}
