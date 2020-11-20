<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $directory = '/products/';

    protected $fillable = [
        'name', 'description', 'popular', 'details', 'logo', 'color', 'link'
    ];

    public function getLogoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
