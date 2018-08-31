import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from './services/util.service';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [MarkdownModule.forRoot()],
  declarations: [],
  providers: [UtilService],
  exports: [CommonModule, MarkdownModule]
})
export class SharedModule {}
