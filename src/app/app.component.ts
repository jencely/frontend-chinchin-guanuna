import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //el archivo html, nombre del selector
  templateUrl: './app.component.html',//darle la ruta donde se encuentra el template
  styleUrls: ['./app.component.css']//hace referencia al css
})
export class AppComponent {
  title = 'frontend-chinchin-guanuna';
}
