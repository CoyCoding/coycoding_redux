<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class HomeController extends Controller
{
    public function index(){
      $projects = Project::with('bulletpoints')->orderBy('id', 'desc')->get();
      return view('home/home')->with('projects', $projects);
    }
}
