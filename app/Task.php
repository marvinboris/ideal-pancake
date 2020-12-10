<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 'description',
    ];

    public function invoices()
    {
        return $this->belongsToMany('App\Invoice', 'invoice_task')->withPivot(['price', 'quantity']);
    }
}
