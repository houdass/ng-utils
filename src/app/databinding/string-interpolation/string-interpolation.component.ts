import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html'
})
export class StringInterpolationComponent {
  html: string;

  constructor(private utilService: UtilService) {
    this.html = this.utilService.html('Bonjour {{ name }}');
  }
}
