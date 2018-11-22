<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        $products = DB::table('productos')->get();

        return  response()->json(['products' => $products]);
    }
 
    public function show($id)
    {
        return  response()->json('show');
    }

    public function store(Request $request)
    {
        return  response()->json('store');
    }

    public function update(Request $request, $id)
    {
        return  response()->json('update');
    }

    public function delete(Request $request, $id)
    {
        return  response()->json(204);
    }
}
