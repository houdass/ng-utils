import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { animRoutes } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animRoutes]
})
export class AppComponent {
  animationState: number;

  constructor(private route: ActivatedRoute) {}

  /*getState(outlet: RouterOutlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }*/

  onActivate(): void {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
    console.log(this.animationState);
  }
}
