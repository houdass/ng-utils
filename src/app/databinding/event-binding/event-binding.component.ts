import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  eventBinding: string;
  eventBindingOn: string;
  constructor(private utilService: UtilService) {
    this.eventBinding = this.utilService.generateHTML('<p (click)="callback()"></p>');
    this.eventBindingOn = this.utilService.generateHTML('<p on-click="callback()"></p>');
  }
}
