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
          'text' => 'MySQL'
        ]);

        BulletPoint::create([
          'text' => 'HTML'
        ]);

        BulletPoint::create([
          'text' => 'Webpack'
        ]);

        BulletPoint::create([
          'text' => 'C#'
        ]);

        BulletPoint::create([
          'text' => 'CSV Parser'
        ]);

        BulletPoint::create([
          'text' => 'Node.js'
        ]);

        BulletPoint::create([
          'text' => 'Material UI'
        ]);

        BulletPoint::create([
          'text' => 'Google Places API'
        ]);

        BulletPoint::create([
          'text' => 'JWT'
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
