export const markdown: any = {
  twowayBinding1: '<input name="name" [(ngModel)]="user.name">',
  twowayBinding2: '<input name="name" [ngModel]="user.name" (ngModelChange)="user.name = $event">'
};
