import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  html: string;

  constructor(private utilService: UtilService) {
    this.html = this.utilService.generateHTML('Bonjour {{ name }}');
  }
}
