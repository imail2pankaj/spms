<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        return response()->json(Company::all());
    }

    public function store(CompanyRequest $request)
    {
        $data = $request->all();

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $imageName = time().'.'.$image->getClientOriginalExtension();
        
            $destinationPath = public_path('/uploads/company');
            $image->move($destinationPath, $imageName);
            $data['logo'] = $imageName;
        }
        $company = Company::create($data);

        return response()->json($company);
    }

    public function show(Company $company)
    {
        return $company;
    }

    public function update(CompanyRequest $request, Company $company)
    {
        $data = $request->all();

        if ($request->hasFile('logo')) {
            if(file_exists(public_path('/uploads/company/' . $company->logo))) {
                unlink(public_path('/uploads/company/' . $company->logo));
            }
            $image = $request->file('logo');
            $imageName = time().'.'.$image->getClientOriginalExtension();
        
            $destinationPath = public_path('/uploads');
            $image->move($destinationPath, $imageName);
            $data['logo'] = $imageName;
        }

        $company->update($data);
        return $company;
    }

    public function destroy(Company $company)
    {
        if(file_exists(public_path('/uploads/company/' . $company->logo))) {
            unlink(public_path('/uploads/company/' . $company->logo));
        }
        $company->delete();
        return response()->noContent();
    }
}
