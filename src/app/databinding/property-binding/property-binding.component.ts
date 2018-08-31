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
    this.textContent = this.utilService.generateHTML('<p [textContent]=[name]></p>');
    this.propertyBinding = this.utilService.generateHTML('<img [src]="user.imgUrl">');
    this.propertyBindingWithBind = this.utilService.generateHTML('<img bind-src="user.imgUrl">');
    this.attributBinding = this.utilService.generateHTML('<td [attr.colspan]="clspn">...</td>');
    this.classBinding = this.utilService.generateHTML('<span [class.active]="isActive">...</span>');
    this.styleBinding = this.utilService.generateHTML(`<p [style.background-color]="'blue'">...</p>`);
    this.styleBinding2 = this.utilService.generateHTML(`<p [style.backgroundColor]="'blue'">...</p>`);
  }
}
