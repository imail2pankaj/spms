<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('project_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('milestone_id')->default(0);
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('due_date')->nullable();
            $table->enum('task_type',['Feature', 'Bug', 'Design', 'Other'])->default('Feature');
            $table->enum('priority',['Very Low', 'Low', 'Normal', 'High', 'Very High'])->default('Normal');
            $table->tinyInteger('completion_rate')->default(0);
            $table->bigIncrements('total_time')->default(0);
            $table->enum('task_status',['Created', 'Active', 'Started', 'Paused', 'Completed', 'Archieved'])->default('Created');
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
        Schema::dropIfExists('project_tasks');
    }
}
