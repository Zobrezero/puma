<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return  response()->json('all');
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
