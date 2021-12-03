<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_code',64);
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->tinyInteger('approx_hours')->default(0);
            $table->enum('project_type',['Fixed', 'Hourly', 'Contract'])->default('Fixed');
            $table->integer('project_cost')->default(0);
            $table->enum('project_status',['Active', 'Hold', 'Completed', 'Closed', 'Archieved'])->default('Hold');
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
        Schema::dropIfExists('projects');
    }
}
