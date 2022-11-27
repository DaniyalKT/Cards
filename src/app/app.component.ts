import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [{
    title: 'tree',
    image: 'assets/images/tree.jpg',
    userName: 'nature',
    content: "i saw tree"

  },
   {
    title: 'biking',
    image: 'assets/images/biking.jpg',
    userName: 'biking',
    content: "i saw biking"

  }, 
  {
    title: 'mountain',
    image: 'assets/images/Mountain.jpg',
    userName: 'mountain',
    content: "i saw mountain"
 
  }]


}
