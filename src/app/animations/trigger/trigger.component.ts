import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './trigger.markdown';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
      transition('* => void', [animate(1000), style({ opacity: 0 })])
    ])
  ]
})
export class TriggerComponent {
  triggerTs: string;
  triggerHtml: string;
  courses: string[];
  constructor(utilService: UtilService) {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
    this.triggerTs = utilService.typescript(markdown.triggerHtml);
    this.triggerHtml = utilService.typescript(markdown.triggerTs);
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
