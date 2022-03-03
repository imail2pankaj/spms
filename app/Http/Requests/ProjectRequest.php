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
            'description' => 'required',
            'start_date' => '',
            'end_date' => '',
            'approx_hours' => '',
            'project_type' => 'required',
            'project_cost' => 'required',
            'project_status' => 'required',
            'pm' => '',
            'developer' => '',
            'designer' => '',
            'qa' => '',
            'bde' => '',
            'note' => '',
        ];
    }
}
