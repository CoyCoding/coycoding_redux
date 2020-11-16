<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\BulletPoint;

class BulletpointSeedTest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        BulletPoint::create([
          'text' => 'Laravel'
        ]);

        BulletPoint::create([
          'text' => 'Javascript'
        ]);

        BulletPoint::create([
          'text' => 'React'
        ]);

        BulletPoint::create([
          'text' => 'SASS'
        ]);

        BulletPoint::create([
          'text' => 'SQL'
        ]);

        BulletPoint::create([
          'text' => 'jQuery'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        BulletPoint::truncate();
    }
}
