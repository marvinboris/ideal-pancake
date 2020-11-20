<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $directory = '/employees/';

    protected $fillable = [
        'first_name', 'last_name', 'gender', 'birthdate', 'country', 'job', 'address', 'phone', 'diploma', 'marital', 'number_children', 'languages', 'driving_licenses', 'email', 'photo', 'matricule'
    ];

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
