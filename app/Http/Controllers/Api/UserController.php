<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        return User::with('roles')->get();
    }

    public function store(UserRequest $request)
    {
        $data = $request->all();
        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/user/profile_image");
            $image->move($destinationPath, $imageName);

            $data['image'] = $imageName;
        }
        if ($request->hasFile('resume_file')) {
            $image = $request->file('resume_file');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/user/resume_file");
            $image->move($destinationPath, $imageName);

            $data['resume_file'] = $imageName;
        }
        return User::create($data);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(UserRequest $request, User $user)
    {
        $data = $request->all();
        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('uploads/user/profile_image/');
            $image->move($destinationPath, $imageName);

            $data['profile_image'] = $imageName;

            if($user->profile_image && file_exists($destinationPath . $user->profile_image)) {
                unlink($destinationPath . $user->profile_image);
            }
        }
        if ($request->hasFile('resume_file')) {
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
