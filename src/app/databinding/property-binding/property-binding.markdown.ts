export const markdown: any = {
  textContent: '<p [textContent]=[name]></p>',
  propertyBinding: '<img [src]="user.imgUrl">',
  propertyBindingWithBind: '<img bind-src="user.imgUrl">',
  attributBinding: '<td [attr.colspan]="clspn">...</td>',
  classBinding: '<span [class.active]="isActive">...</span>',
  styleBinding: `<p [style.background-color]="'blue'">...</p>`,
  styleBinding2: `<p [style.backgroundColor]="'blue'">...</p>`
};
