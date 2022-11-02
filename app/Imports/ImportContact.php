<?php

namespace App\Imports;

use App\Models\Contact;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportContact implements ToCollection, WithHeadingRow
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $count = Contact::where('email', $row['email'])->count();
            if ($count > 0) {
                continue;
            }
            $data = Contact::create([
                'name' => $row['name'],
                'email' => $row['email'],
                'phone' => $row['phone'],
                'business_name' => $row['business_name'],
                'city' => $row['city'],
                'country' => $row['country'],
            ]);
        }
    }
    public function headingRow(): int
    {
        return 1;
    }
}
