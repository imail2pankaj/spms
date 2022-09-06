<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = ['customer_id', 'invoice_date', 'invoice_number', 'tax_rate', 'tax_amount', 'total_amount', 'notes', 'payment', 'payment_date'];

    public function invoiceItems() {
        return $this->hasMany(InvoiceItem::class);
    }

    public function customer() {
        return $this->belongsTo(User::class);
    }
}
