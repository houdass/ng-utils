import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './attribute.markdown';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {
  stringExp: string;
  arrayExp: string;
  objExp: string;
  stringExpConditional: string;

  constructor(private utilService: UtilService) {
    this.stringExp = this.utilService.html(markdown.stringExp);
    this.arrayExp = this.utilService.html(markdown.arrayExp);
    this.objExp = this.utilService.html(markdown.objExp);
    this.stringExpConditional = this.utilService.html(markdown.stringExpConditional);
  }
}
