import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

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
    this.stringExp = this.utilService.html(`<span [ngClass]="'dodgerblue large'">Some text</span>`);
    this.arrayExp = this.utilService.html(`<span [ngClass]="['dodgerblue', 'italic']">Some text</span>`);
    this.objExp = this.utilService.html(
      `<span [ngClass]="{dodgerblue: true, large: true, italic: false}">Some Text</span>`
    );
    this.objExp = this.utilService.html(`<span [ngClass]="{'dodgerblue large italic': true}">Some text</span>`);
  }
}
