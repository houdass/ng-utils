import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent {
  twowayBinding: string;
  twowayBinding2: string;
  constructor(private utilService: UtilService) {
    this.twowayBinding = this.utilService.html('<input name="name" [(ngModel)]="user.name">');
    this.twowayBinding2 = this.utilService.html(
      '<input name="name" [ngModel]="user.name" (ngModelChange)="user.name = $event">'
    );
  }
}
