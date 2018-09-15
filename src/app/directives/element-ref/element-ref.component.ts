import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './element-ref.markdown';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html'
})
export class ElementRefComponent {
  elementRefConstructor: string;
  setValue: string;

  constructor(private utilService: UtilService) {
    this.elementRefConstructor = this.utilService.typescript(markdown.elementRefConstructor);
    this.setValue = this.utilService.typescript(markdown.setValue);
  }
}
