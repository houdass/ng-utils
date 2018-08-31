import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
      transition('* => void', [animate(1000), style({ opacity: 0 })])
    ])
  ]
})
export class TriggerComponent {
  items: string[];
  constructor() {
    this.items = ['Item 1', 'Item 2', 'Item 3'];
  }

  addItem(item: HTMLInputElement) {
    this.items.push(item.value);
  }

  removeItem(item: string) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
