<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        $res = [];
        $products = DB::table('productos')->select('*')->get();

        foreach ($products as $value)
        {
            $res[] =
            [
                "name"  => $value->prod_name,
                "desc"  => $value->prod_description,
                "stock" => $value->prod_stock,
                "price" => $value->prod_price
            ];
        }
        return  response()->json(['products' => $res]);
    }
 
    public function show($id)
    {
        return  response()->json('show');
    }

    public function store(Request $request)
    {
        if ($request->request->get("name") && $request->request->get("desc") && $request->request->get("stock") && $request->request->get("price"))
        {
            $response = DB::table('productos')->insert(
            [
                'prod_name' => $request->request->get("name"),
                'prod_description' => $request->request->get("desc"),
                'prod_stock' => $request->request->get("stock"),
                'prod_price' => $request->request->get("price")
            ]);
            return  response()->json('ok');
        }
        return  response()->json('notok');
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
