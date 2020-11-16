<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function bulletpoints()
    {
      return $this->belongsToMany('App\Models\BulletPoint', 'bullet_point_project');
    }
}
