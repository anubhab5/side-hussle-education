import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'side-hussle-education';

  cardData = [
    {
      cardTitle: 'Programming',
      cardImage: 'program_48.png'
    },
    {
      cardTitle: 'UX Design',
      cardImage: 'design.png'
    },
    {
      cardTitle: 'Web Development',
      cardImage: 'web.png'
    },
    {
      cardTitle: 'App Development',
      cardImage: 'app-development.png'
    },
    {
      cardTitle: 'Train',
      cardImage: 'teaching.png'
    },
  ];
}
