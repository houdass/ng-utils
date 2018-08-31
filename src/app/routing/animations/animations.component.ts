import { Component, OnInit } from '@angular/core';
import { routerTransition } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [routerTransition]
})
export class AnimationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
