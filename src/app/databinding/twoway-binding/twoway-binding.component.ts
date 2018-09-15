import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './twoway-binding.markdown';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html'
})
export class TwowayBindingComponent {
  twowayBinding1: string;
  twowayBinding2: string;
  constructor(private utilService: UtilService) {
    this.twowayBinding1 = this.utilService.html(markdown.twowayBinding1);
    this.twowayBinding2 = this.utilService.html(markdown.twowayBinding2);
  }
}
