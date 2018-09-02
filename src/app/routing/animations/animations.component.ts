import { Component } from '@angular/core';
import { routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [routerTransition]
})
export class AnimationsComponent {
  constructor() {}

  getState(outlet: RouterOutlet): any {
    return outlet.activatedRouteData.state;
  }
}
