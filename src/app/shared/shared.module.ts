import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from './services/util.service';
import { MarkdownModule } from 'ngx-markdown';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forRoot()],
  declarations: [ProgressBarComponent],
  providers: [UtilService],
  exports: [CommonModule, MarkdownModule, ProgressBarComponent]
})
export class SharedModule {}
