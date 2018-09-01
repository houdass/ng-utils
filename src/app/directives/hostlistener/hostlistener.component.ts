import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './hostlistener.markdown';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.scss']
})
export class HostlistenerComponent {
  hostbinding: string;
  hostlistener: string;

  constructor(private utilService: UtilService) {
    this.hostbinding = this.utilService.typescript(markdown.hostbinding);
    this.hostlistener = this.utilService.typescript(markdown.hostlistener);
  }
}
