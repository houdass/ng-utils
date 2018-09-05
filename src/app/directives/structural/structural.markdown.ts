export const markdown: any = {
  ngIf: `<p *ngIf="isVisible; else noCondition">My message if true</p>
<ng-template #noCondition><p>My message if false<p></ng-template>`,
  ngIfConsistent: `<p *ngIf="isVisible; then condition else noCondition"></p>
<ng-template #condition><p>My message if true<p></ng-template>
<ng-template #noCondition><p>My message if false<p></ng-template>`,
  ngFor: `<p *ngFor="let item of items; let i = index">{{ i }} - {{ item.name }}</p>`,
  ngForAs: `<p *ngFor="let item of items; index as i">{{ i }} - {{ item.name }}</p>`
};
