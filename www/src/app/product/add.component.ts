import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ProductAddComponent implements OnInit {

	//https://angular.io/guide/forms
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
  	console.log("acá andamos");
  }
}
