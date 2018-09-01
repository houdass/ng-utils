import { Component } from '@angular/core';
import { routerTransition } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [routerTransition]
})
export class AnimationsComponent {
  constructor() {}

  getState(outlet: any): any {
    return outlet.activatedRouteData.state;
  }
}
