import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './transition.markdown';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
  animations: [trigger('fade', [state('void', style({ opacity: 0 })), transition(':enter, :leave', animate(1000))])]
})
export class TransitionComponent {
  transitionTs1: string;
  transitionTs2: string;
  transitionTs3: string;
  transitionTs4: string;
  courses: string[];
  constructor(utilService: UtilService) {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
    this.transitionTs1 = utilService.typescript(markdown.transitionTs1);
    this.transitionTs2 = utilService.typescript(markdown.transitionTs2);
    this.transitionTs3 = utilService.typescript(markdown.transitionTs3);
    this.transitionTs4 = utilService.typescript(markdown.transitionTs4);
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
