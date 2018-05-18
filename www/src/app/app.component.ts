import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'Puma webpage';
  folder = {
  	name: 'nombre de la carpeta',
  	update: 'el otro día'
  };
}