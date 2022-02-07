<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->enum('type',['Hardware','Software','Other'])->default('Other')->index('index_type');
            $table->enum('priority',['Very Low', 'Low', 'Normal', 'High', 'Very High'])->default('Low')->index('index_priority');
            $table->enum('status',['Open','Closed'])->default('Open')->index('index_status');
            $table->bigInteger('user_id');
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
        Schema::dropIfExists('service_tickets');
    }
}
