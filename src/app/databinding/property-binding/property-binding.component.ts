import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  textContent: string;
  propertyBinding: string;
  propertyBindingWithBind: string;
  attributBinding: string;
  classBinding: string;
  styleBinding: string;
  styleBinding2: string;
  constructor(private utilService: UtilService) {
    this.textContent = this.utilService.html('<p [textContent]=[name]></p>');
    this.propertyBinding = this.utilService.html('<img [src]="user.imgUrl">');
    this.propertyBindingWithBind = this.utilService.html('<img bind-src="user.imgUrl">');
    this.attributBinding = this.utilService.html('<td [attr.colspan]="clspn">...</td>');
    this.classBinding = this.utilService.html('<span [class.active]="isActive">...</span>');
    this.styleBinding = this.utilService.html(`<p [style.background-color]="'blue'">...</p>`);
    this.styleBinding2 = this.utilService.html(`<p [style.backgroundColor]="'blue'">...</p>`);
  }
}
