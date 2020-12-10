<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $directory = '/customers/';

    protected $fillable = [
        'name', 'address', 'country', 'phone', 'email', 'logo',
    ];

    public function getLogoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
