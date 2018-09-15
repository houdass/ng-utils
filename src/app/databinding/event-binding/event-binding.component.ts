import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './event-binding.markdown';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent {
  eventBinding: string;
  eventBindingOn: string;
  eventBindingEnter: string;
  eventBindingExamples: string;
  constructor(private utilService: UtilService) {
    this.eventBinding = this.utilService.html(markdown.eventBinding);
    this.eventBindingOn = this.utilService.html(markdown.eventBindingOn);
    this.eventBindingEnter = this.utilService.html(markdown.eventBindingEnter);
    this.eventBindingExamples = this.utilService.html(markdown.eventBindingExamples);
  }
}
