export const markdown: any = {
  textContent: '<p (click)="callback()"></p>',
  propertyBinding: '<p on-click="callback()"></p>',
  propertyBindingWithBind: '<img bind-src="user.imgUrl">',
  attributBinding: '<td [attr.colspan]="clspn">...</td>',
  classBinding: '<span [class.active]="isActive">...</span>',
  styleBinding: `<p [style.background-color]="'blue'">...</p>`,
  styleBinding2: `<p [style.backgroundColor]="'blue'">...</p>`
};
