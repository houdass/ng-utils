import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './hostbinding.markdown';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html'
})
export class HostbindingComponent {
  hostbinding: string;
  setValue: string;

  constructor(private utilService: UtilService) {
    this.hostbinding = this.utilService.typescript(markdown.hostbinding);
    this.setValue = this.utilService.typescript(markdown.setValue);
  }
}
