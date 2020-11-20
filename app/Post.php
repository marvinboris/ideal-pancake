<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $directory = '/posts/';

    protected $fillable = [
        'poster_id', 'poster_type', 'title', 'body', 'photo', 'slug',
    ];

    public function poster()
    {
        return $this->morphTo();
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
