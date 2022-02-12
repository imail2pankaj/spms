<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ServiceTicket;
use Illuminate\Http\Request;

class ServiceTicketController extends Controller
{
    public function index(Request $request)
    {
        $serviceTickets = ServiceTicket::with(['user' => function ($query) {
            $query->select('id', 'first_name', 'last_name');
        }])->whereIn('status',['Open','Closed']);
        if(!auth()->user()->hasRole('super-admin') && !auth()->user()->hasRole('admin') && !auth()->user()->hasRole('hr')) {
            $serviceTickets->where('user_id', auth()->user()->id);
        }
        // $serviceTickets
        if(!empty($request->get('keyword'))) {
            $serviceTickets->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('title', 'LIKE', $queryParams)
                      ->orWhere('description', 'LIKE', $queryParams)
                      ->orWhere('type', 'LIKE', $queryParams)
                      ->orWhere('priority', 'LIKE', $queryParams)
                      ->orWhere('status', 'LIKE', $queryParams);
            });
        }
        return $serviceTickets->orderBy('id','desc')->paginate($request->get('pagination'));
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        $serviceTicket = ServiceTicket::create($data);
        return $serviceTicket;
    }

    public function show(ServiceTicket $serviceTicket)
    {
        return $serviceTicket;
    }


    public function update(Request $request, ServiceTicket $serviceTicket)
    {
        $data = $request->all();
        $serviceTicket->update($data);
        return $serviceTicket;
    }

    public function destroy(ServiceTicket $serviceTicket)
    {
        $serviceTicket->destroy($serviceTicket->id);
        return response()->noContent();
    }
}
