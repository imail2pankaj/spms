<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function index()
    {
        return User::with('roles')->get();
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
        $user = User::create($data);
        $user->assignRole($request->input('roles'));
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
}
