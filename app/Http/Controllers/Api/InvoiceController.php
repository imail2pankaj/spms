<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use App\Models\User;
use DB;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $invoices = Invoice::with(['invoiceItems', 'customer'])->where('id', "!=", "");

        if (!empty($request->get('keyword'))) {
            $invoices->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('invoice_date', 'LIKE', $queryParams)
                    ->orWhere('invoice_number', 'LIKE', $queryParams)
                    ->orWhere('total_amount', 'LIKE', $queryParams)
                    ->orWhere('notes', 'LIKE', $queryParams)
                    ->orWhere('payment', 'LIKE', $queryParams)
                    ->orWhere('payment_date', 'LIKE', $queryParams);
            });
        }
        return $invoices->latest()->paginate($request->get('pagination'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['invoice_items'] = json_decode($data['invoice_items']);
        $invoice = Invoice::create($data);
        foreach ($data['invoice_items'] as $inv) {
            $invoice->invoiceItems()->create((array)$inv);
        }
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $invoice = Invoice::with("invoiceItems")->find($id);
        return response()->json($invoice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function getInvoiceNewInvoiceNumber()
    {
        $ai = DB::select('SELECT AUTO_INCREMENT as ai FROM information_schema.TABLES WHERE TABLE_SCHEMA = "spms" AND TABLE_NAME = "invoices"');
        return response()->json("SITS" . str_repeat("0", 5 - strlen($ai[0]->ai)) . $ai[0]->ai);
    }
    public function getCustomerDetails($user_id)
    {
        return response()->json(User::find($user_id));
    }
}
