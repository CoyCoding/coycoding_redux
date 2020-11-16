<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletPoint extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = ['id'];

    public function projects()
    {
        return $this->belongsToMany('App\Models\Project', 'bullet_point_project');
    }
}
