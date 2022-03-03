<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\UserBank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $users = User::with('roles');
        if($request->get('status') > -1) {
            $users->where("user_status", $request->get('status'));
        }
        if(!empty($request->get('keyword'))) {
            $users->where(function ($query) use ($request) {
                $queryParams = "%" . $request->get('keyword') . "%";
                $query->where('first_name', 'LIKE', $queryParams)
                      ->orWhere('middle_name', 'LIKE', $queryParams)
                      ->orWhere('last_name', 'LIKE', $queryParams)
                      ->orWhere('email', 'LIKE', $queryParams)
                      ->orWhere('user_code', 'LIKE', $queryParams)
                      ->orWhere('phone_number', 'LIKE', $queryParams);
            });
        }
        return $users->latest()->paginate($request->get('pagination'));
    }

    public function store(UserRequest $request)
    {
        $data = $request->all();
        if($request->has("password")) {
            $data['password'] = $request->input("password");
        }
        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/user/profile_image");
            $image->move($destinationPath, $imageName);

            $data['profile_image'] = $imageName;
        }
        if ($request->hasFile('resume_file')) {
            $image = $request->file('resume_file');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/user/resume_file");
            $image->move($destinationPath, $imageName);

            $data['resume_file'] = $imageName;
        }
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        $user->assignRole($request->input('roles'));

        $user = User::find($user->id);
        $user->user_code = "SIS".str_repeat("0", 5-strlen($user->id)) . $user->id;
        $user->save();
        $data['user_id'] = $user->id;

        UserBank::create($data);
        return $user;
    }

    public function show(User $user)
    {
        return response()->json($user->where('id', $user->id)->with('roles')->first());
    }

    public function update(UserRequest $request, User $user)
    {
        $data = $request->all();
        if (!empty($request->input('profile_image')) && $request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('uploads/user/profile_image/');
            $image->move($destinationPath, $imageName);

            $data['profile_image'] = $imageName;

            if($user->profile_image && file_exists($destinationPath . $user->profile_image)) {
                unlink($destinationPath . $user->profile_image);
            }
        }
        if (!empty($request->input('resume_file')) && $request->hasFile('resume_file')) {
            $image = $request->file('resume_file');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('uploads/user/resume_file/');
            $image->move($destinationPath, $imageName);

            $data['resume_file'] = $imageName;

            if($user->resume_file && file_exists($destinationPath . $user->resume_file)) {
                unlink($destinationPath . $user->resume_file);
            }
        }
        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }
        $user->update($data);

        DB::table('model_has_roles')->where('model_id',$user->id)->delete();

        $user->assignRole($request->input('roles'));
        return $user;
    }

    public function destroy(User $user)
    {
        if ($user->profile_image && file_exists(public_path("uploads/user/" . $user->profile_image)))  {
            unlink(public_path("uploads/user/profile_image/" . $user->profile_image));
        }

        if ($user->resume_file && file_exists(public_path("uploads/user/resume_file/" . $user->resume_file)))  {
            unlink(public_path("uploads/user/resume_file/" . $user->resume_file));
        }
        $user->delete();
        return response()->noContent();
    }


    public function getBank($id)
    {
        $bank = UserBank::where("user_id",$id)->first();
        return response()->json($bank);
    }

    public function updateBank(Request $request, $id)
    {
        $bank = UserBank::where("user_id",$id)->first();
        $bank->update($request->all());
        return response()->json($bank);
    }
}
