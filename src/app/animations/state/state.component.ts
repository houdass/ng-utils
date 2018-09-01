import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './state.markdown';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(1000))
    ])
  ]
})
export class StateComponent {
  stateTs: string;
  stateHtml: string;
  courses: string[];
  constructor(utilService: UtilService) {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
    this.stateTs = utilService.typescript(markdown.stateHtml);
    this.stateHtml = utilService.typescript(markdown.stateTs);
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
