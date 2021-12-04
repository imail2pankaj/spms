<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
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
            'title' => 'required|string',
            'description' => 'required|max:64',
            'start_date' => 'required',
            'end_date' => '',
            'approx_hours' => '',
            'project_type' => 'required',
            'project_cost' => 'required',
            'project_status' => 'required',
            'pm' => 'required',
            'developer' => 'required',
            'designer' => '',
            'qa' => '',
            'bde' => '',
            'note' => '',
        ];
    }
}
