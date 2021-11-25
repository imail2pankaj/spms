<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:64',
            'middle_name' => 'string|max:64',
            'last_name' => 'required|string|max:64',
            'user_code' => "",
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
            'phone_number' => 'required',
            'emergency_phone_number' => '',
            'profile_image' => '',
            'gender' => '',
            'marital_status' => '',
            'dob' => '',
            'join_date' => '',
            'resign_date' => '',
            'resume_file' => '',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',
            'user_status' => '',
        ];
    }
}
