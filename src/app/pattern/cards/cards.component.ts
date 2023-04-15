import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input()
  cardTitle!: string;

  @Input()
  cardSubTitle!: string;

  @Input()
  cardImage!: string;

}
