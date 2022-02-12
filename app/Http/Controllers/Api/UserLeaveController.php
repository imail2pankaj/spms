<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserLeave;
use Illuminate\Http\Request;

class UserLeaveController extends Controller
{
    public function index(Request $request)
    {
        $leaves = new UserLeave();
        $leaves = $leaves->with(['user' => function($query) {
            return $query->select(['id','first_name','last_name']);
        }]);
        if(!auth()->user()->hasRole('super-admin') && !auth()->user()->hasRole('admin') && !auth()->user()->hasRole('hr')) {
            $leaves = $leaves->where('user_id', auth()->user()->id);
        }
        if(!empty($request->get('keyword'))) {
            $leaves->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('description', 'LIKE', $queryParams)
                      ->orWhere('start_date', 'LIKE', $queryParams)
                      ->orWhere('end_date', 'LIKE', $queryParams)
                      ->orWhere('type', 'LIKE', $queryParams)
                      ->orWhere('status', 'LIKE', $queryParams);
            });
        }
        return $leaves->orderBy('id','desc')->paginate($request->get('pagination'));
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        $leaves = UserLeave::create($data);
        return $leaves;
    }

    public function show(UserLeave $user_leafe)
    {
        return $user_leafe;
    }

    public function update(Request $request, UserLeave $user_leafe)
    {
        $data = $request->all();
        $user_leafe->update($data);
        return $user_leafe;
    }

    public function destroy(UserLeave $user_leafe)
    {
        $user_leafe->destroy($user_leafe->id);
        return response()->noContent();
    }
}
