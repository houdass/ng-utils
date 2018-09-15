import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './property-binding.markdown';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html'
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
    this.textContent = this.utilService.html(markdown.textContent);
    this.propertyBinding = this.utilService.html(markdown.propertyBinding);
    this.propertyBindingWithBind = this.utilService.html(markdown.propertyBindingWithBind);
    this.attributBinding = this.utilService.html(markdown.attributBinding);
    this.classBinding = this.utilService.html(markdown.classBinding);
    this.styleBinding = this.utilService.html(markdown.styleBinding);
    this.styleBinding2 = this.utilService.html(markdown.styleBinding2);
  }
}
