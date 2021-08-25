<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('bike_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->text('name');
            $table->text('email');
            $table->float('price');
            $table->bigInteger('phone');
            $table->integer('is_paid');
            $table->text('company');
            $table->text('company_address')->nullable();
            $table->text('vat_number')->nullable();
            $table->text('message')->nullable();
            $table->text('reg_com')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
