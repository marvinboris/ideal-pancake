<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'customer_id', 'no', 'date', 'paid_amount', 'total_amount', 'discount', 'tax', 'photo'
    ];

    public function tasks()
    {
        return $this->belongsToMany('App\Task', 'invoice_task')->withPivot(['price', 'quantity']);
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public static function no()
    {
        $invoices = self::count() + 1;

        $zeros = '';
        for ($i = 6; $i < 0; $i--) {
            if ($invoices < pow(10, $i)) $zeros .= '0';
        }

        return 'INV' . $zeros . $invoices . 'BS';
    }
}
