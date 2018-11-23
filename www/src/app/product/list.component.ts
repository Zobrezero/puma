import { Component, OnInit } from '@angular/core';
import reqwest from 'reqwest';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductListComponent implements OnInit
{
	public products = [];

	constructor()
  {
    reqwest(
    {
      url: 'http://localhost/puma-server/api/products',
      method: 'get',
      success: (resp) =>
      {
        this.products = resp.products;
        console.log(this.products);
      }
    })
  }

  ngOnInit()
  {
  }
}
