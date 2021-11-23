<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function store(ProductRequest $request)
    {
        $data = $request->all();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path("uploads/product");
            $image->move($destinationPath, $imageName);

            $data['image'] = $imageName;
        }
        return Product::create($data);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(ProductRequest $request, Product $product)
    {
        $data = $request->all();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            $destinationPath = public_path('uploads/product/');
            $image->move($destinationPath, $imageName);

            $data['image'] = $imageName;

            if($product->image && file_exists($destinationPath . $product->image)) {
                unlink($destinationPath . $product->image);
            }
        }
        $product->update($data);
        return $product;
    }

    public function destroy(Product $product)
    {
        if ($product->image && file_exists(public_path("uploads/product/" . $product->image)))  {
            unlink(public_path("uploads/product/" . $product->image));
        }
        $product->delete();
        return response()->noContent();
    }
}
