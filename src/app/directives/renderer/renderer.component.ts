import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './renderer.markdown';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html'
})
export class RendererComponent {
  rendererConstructor: string;
  setValue: string;
  constructor(private utilService: UtilService) {
    this.rendererConstructor = this.utilService.typescript(markdown.rendererConstructor);
    this.setValue = this.utilService.typescript(markdown.setValue);
  }
}
