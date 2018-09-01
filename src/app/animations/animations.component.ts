import { Component } from '@angular/core';
import { UtilService } from '../shared/services/util.service';
import { markdown } from './animations.markdown';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent {
  importAnimations: string;
  polyfill: string;
  npm: string;

  constructor(private utilService: UtilService) {
    this.importAnimations = this.utilService.typescript(markdown.importAnimations);
    this.polyfill = this.utilService.typescript(markdown.polyfill);
    this.npm = this.utilService.typescript(markdown.npm);
  }
}
