import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent {
  ngIf: string;
  ngIfConsistent: string;
  ngFor: string;
  ngForAs: string;
  constructor(private utilService: UtilService) {
    this.ngIf = this.utilService.html(`<p *ngIf="isVisible; else noCondition">My message if true</p>
<ng-template #noCondition><p>My message if false<p></ng-template>`);
    this.ngIfConsistent = this.utilService.html(`<p *ngIf="isVisible; then condition else noCondition"></p>
<ng-template #condition><p>My message if true<p></ng-template>
<ng-template #noCondition><p>My message if false<p></ng-template>`);
    this.ngFor = this.utilService.html(`<p *ngFor="let item of items; let i = index">{{ i }} - {{ item.name }}</p>`);
    this.ngForAs = this.utilService.html(`<p *ngFor="let item of items; index as i">{{ i }} - {{ item.name }}</p>`);
  }
}
