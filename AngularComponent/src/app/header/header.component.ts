import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  slogan: String = "Your one stop shop for everything."
  source: String = "/assets/shopping.jpg";
  getSlogan(){
    return 'This is the new slogan for the webpage'
  }
}
