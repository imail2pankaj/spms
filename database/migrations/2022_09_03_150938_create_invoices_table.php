<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->index('customer_id');
            $table->foreign('customer_id')->references('id')->on('users');
            $table->date('invoice_date')->index('index_invoice_date');
            $table->string('invoice_number', 32)->index('index_invoice_number')->nullable();
            $table->decimal('tax_rate', 4, 2)->default(0.0);
            $table->decimal('tax_amount', 8, 2)->default(0.0);
            $table->decimal('total_amount', 8, 2)->default(0.0);
            $table->text('notes')->nullable();
            $table->enum('payment',['Pending','Paid'])->default('Pending')->index('index_payment');
            $table->date('payment_date')->index('index_payment_date')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
