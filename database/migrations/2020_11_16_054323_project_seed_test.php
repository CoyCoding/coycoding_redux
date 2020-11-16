<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Project;

class ProjectSeedTest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $test = Project::create([
            'name' => 'Coy Coding',
            'img_url' => 'https://stevensegallery.com/g/504/311',
            'description' =>
              'Well... its this site',
            'github_link' => 'https://github.com/fluffytoycoy/CoyCoding',
            'site_link' => '#',
        ])->bulletpoints()->attach([1,6,2,4]);

        Project::create([
          'name' => 'Fluffy Gaming',
          'img_url' => '/images/fluffy_gaming.png',
          'description' =>
            'A Simple site done in C# that grabs CSV data from a Google Sheet and displays it in a sortable table.',
          'github_link' => 'https://github.com/fluffytoycoy/ftc',
          'site_link' => 'http://www.fluffygaming.pro/',
        ])->bulletpoints()->attach([8,9,2]);

        Project::create([
          'name' => 'Retro Roulette',
          'img_url' => '/images/retro_roulette.png',
          'description' =>
            'Random game generator built with React, Node.js and Sqllite. Features customizable filters for users and a dashboard with basic crud operations for admins.',
          'github_link' => 'https://github.com/fluffytoycoy/retro-roulette',
          'site_link' => 'https://retro-roulette.herokuapp.com/',
          'authors_notes' => '/login for the hidden log in page USER: test, PASSWORD: test. This site is hosted on heroku so it may take a second for the server to respond on first load.',
        ])->bulletpoints()->attach([3,4,10,11,13]);

        Project::create([
          'name' => 'techLabs',
          'img_url' => '/images/techLab.png',
          'description' =>
            'A Front end site for a digital agency. Done with a team of two through trello one graphic designer and me as the Developer.',
          'github_link' => 'https://github.com/fluffytoycoy/techLabs',
          'site_link' => 'https://techLabs.coycoding.com/',
        ])->bulletpoints()->attach([3,4,10,12]);

        Project::create([
          'name' => 'Chamberlin HVAC',
          'img_url' => ' /images/chamberlin.png',
          'description' =>
            'This is a site for Chamberlin HVAC. It was done with react, sass and Node.js on the backend. It uses the google places API for fetching recent reviews and a custom backend API for filtering and displaying products.',
          'github_link' => 'https://github.com/fluffytoycoy/adonis-react-hvac',
          'site_link' => 'https://hvac-react-adonis.herokuapp.com/',
          'authors_notes' => 'This site is hosted on heroku so it may take a second for the server to respond on first load.'
        ])->bulletpoints()->attach([3,4,10,12]);

        Project::create([
          'name' => 'Mike Shannon\'s Grill',
          'img_url' => '/images/ms-food.png',
          'description' =>
            'A rework of the Mike Shannons Bar and Grill site. Features a custom auth system, backend api for editing of menu items, and an animated 3 column layout desigin for the menu and info sections.',
          'github_link' => 'https://github.com/fluffytoycoy/ms-food',
          'site_link' => 'https://ms-food.coycoding.com/',
          'authors_notes' => '/login for the hidden log in page USER: admin, PASSWORD: test'
        ])->bulletpoints()->attach([3,4,13,5,11]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Project::truncate();
    }
}
