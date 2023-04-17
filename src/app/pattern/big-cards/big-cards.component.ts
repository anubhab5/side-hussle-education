import { Component, Input } from '@angular/core';
import { BigCardModel } from './big-cards.model';

@Component({
  selector: 'sh-big-cards',
  templateUrl: './big-cards.component.html',
  styleUrls: ['./big-cards.component.scss']
})
export class BigCardsComponent {

  @Input()
  cardContent !: BigCardModel;

}
