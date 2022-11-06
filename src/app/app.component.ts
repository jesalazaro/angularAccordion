import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  activeTitle : string="";
  
  closeOtherPanels(value: string){

    this.activeTitle=value;
  }
}
