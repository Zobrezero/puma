import { Component, OnInit } from '@angular/core';

export interface PeriodicElement
{
  position: number;
  name: string;
  lastname: string;
  email: string;
  active: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, name: 'Admin 1', lastname: 'Alguno', email: 'admin1@email.com', active: 'Si'},
	{position: 2, name: 'Admin 2', lastname: 'Alguno', email: 'admin2@email.com', active: 'Si'},
	{position: 3, name: 'Admin 3', lastname: 'Alguno', email: 'admin3@email.com', active: 'No'},
	{position: 4, name: 'Admin 4', lastname: 'Alguno', email: 'admin4@email.com', active: 'Si'},
];

@Component({
  selector: 'app-admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'lastname', 'email', 'active'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
