import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './event-binding.markdown';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  eventBinding: string;
  eventBindingOn: string;
  constructor(private utilService: UtilService) {
    this.eventBinding = this.utilService.html(markdown.eventBinding);
    this.eventBindingOn = this.utilService.html(markdown.eventBindingOn);
  }
}
