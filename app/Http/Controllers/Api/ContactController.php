<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Imports\ImportContact;
use App\Models\Contact;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $contacts = Contact::where('id', "!=", "");
        if (!empty($request->get('keyword'))) {
            $contacts->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('name', 'LIKE', $queryParams)
                    ->orWhere('email', 'LIKE', $queryParams)
                    ->orWhere('phone', 'LIKE', $queryParams)
                    ->orWhere('business_name', 'LIKE', $queryParams)
                    ->orWhere('city', 'LIKE', $queryParams)
                    ->orWhere('country', 'LIKE', $queryParams);
            });
        }
        return $contacts->orderBy('id', 'desc')->paginate($request->get('pagination'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactRequest $request)
    {
        $data = $request->all();
        $data['id'] = $request->user()->id;
        $contacts = Contact::create($data);
        return $contacts;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return $contact;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(ContactRequest $request, Contact $contact)
    {
        $data = $request->all();
        $contact->update($data);
        return $contact;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->destroy($contact->id);
        return response()->noContent();
    }

    public function import(Request $request)
    {
        Excel::import(
            new ImportContact,
            $request->file('file')
        );
        return back()->with('success', 'Import successfully!');
    }
}
