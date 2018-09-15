import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './structural.markdown';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html'
})
export class StructuralComponent {
  ngIf: string;
  ngIfConsistent: string;
  ngFor: string;
  ngForAs: string;
  constructor(private utilService: UtilService) {
    this.ngIf = this.utilService.html(markdown.ngIf);
    this.ngIfConsistent = this.utilService.html(markdown.ngIfConsistent);
    this.ngFor = this.utilService.html(markdown.ngFor);
    this.ngForAs = this.utilService.html(markdown.ngForAs);
  }
}
