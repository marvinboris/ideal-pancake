<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $directory = '/members/';

    protected $fillable = [
        'first_name', 'last_name', 'job', 'quote', 'social_media', 'photo',
    ];

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
