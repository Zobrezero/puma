import { Component, OnInit } from '@angular/core';
import reqwest from "reqwest";

@Component(
{
  selector: 'app-product-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class ProductAddComponent implements OnInit
{
  //https://angular.io/guide/forms

  constructor() {}

  ngOnInit() {}

  onSubmit()
  {
    console.log("acá andamos");
  }

  sendForm(event)
  {
    var data =
    {
      name:  document.getElementById("name").value,
      desc:  document.getElementById("description").value,
      stock: document.getElementById("stock").value,
      price: document.getElementById("price").value,
    };
    reqwest(
    {
      url: 'http://localhost/puma-server/api/products',
      method: 'post',
      data: data,
      success: (resp) =>
      {
        console.log("se guardó");
        console.log(resp);
      }
    })
  }
}