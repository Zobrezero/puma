import { Component, OnInit } from '@angular/core';
import reqwest from 'reqwest';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductListComponent implements OnInit
{
	private listado = [];

	constructor()
  {
  	reqwest(
  	{
  	  url: 'http://localhost/puma-server/api/products',
      method: 'get',
      success: (resp) =>
      {
	      this.listado = resp;
      }
  	})
	}
  ngOnInit()
  {}
}
