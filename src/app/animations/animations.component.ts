import { Component, OnInit } from '@angular/core';
import { UtilService } from '../shared/services/util.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  importAnimations: string;
  polyfill: string;
  npm: string;

  constructor(private utilService: UtilService) {
    this.importAnimations = this.utilService.typescript(
      `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`
    );
    this.polyfill = this.utilService.typescript(`import 'web-animations-js'`);
    this.npm = this.utilService.typescript(`npm install --save web-animations-js`);
  }

  ngOnInit() {}
}
