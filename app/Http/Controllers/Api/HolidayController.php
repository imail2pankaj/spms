<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Holiday;
use Illuminate\Http\Request;

class HolidayController extends Controller
{
    public function index(Request $request)
    {
        $holidays = new Holiday();
        if(!empty($request->get('keyword'))) {
            $holidays->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('title', 'LIKE', $queryParams)
                      ->orWhere('holiday_date', 'LIKE', $queryParams);
            });
        }
        return $holidays->orderBy('id','desc')->paginate($request->get('pagination'));
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $holidays = Holiday::create($data);
        return $holidays;
    }

    public function show(Holiday $holiday)
    {
        return $holiday;
    }

    public function update(Request $request, Holiday $holiday)
    {
        $data = $request->all();
        $holiday->update($data);
        return $holiday;
    }

    public function destroy(Holiday $holiday)
    {
        $holiday->destroy($holiday->id);
        return response()->noContent();
    }
}
