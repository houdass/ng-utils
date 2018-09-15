import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './input.markdown';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  inputHtml: string;
  inputTs: string;

  constructor(private utilService: UtilService) {
    this.inputHtml = utilService.typescript(markdown.inputHtml);
    this.inputTs = utilService.typescript(markdown.inputTs);
  }
}
