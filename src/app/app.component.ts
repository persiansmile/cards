import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = [
    {
      title: "Neat Tree" ,
      imageUrl: "assets/tree.jpeg",
      username: "@nature",
      content: "saw this yummy tree on my way"
    },
    {
      title: "Big mountain" ,
      imageUrl: "assets/mountain.jpeg",
      username: "@mountain",
      content: "I climb a mountain like you walk on flat ground"
    },
    {
      title: "bike rider" ,
      imageUrl: "assets/biking.jpeg",
      username: "@bike1456",
      content: "I ride bike then go to hike to see a mike on the ride."
    }
  ]
}
