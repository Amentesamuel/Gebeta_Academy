<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('gender');
            $table->string('phone');
            $table->string('address');
            $table->string('education');
            $table->string('subject');
            $table->string('available_days');
            $table->string('experience');
            $table->string('slug');
            $table->string('image');
            $table->longText('description');
            $table->boolean('status')->default(false);

            $table->timestamps();
            $table->softDeletes();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutors');
    }
};
