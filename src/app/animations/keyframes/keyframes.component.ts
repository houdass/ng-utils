import { Component } from '@angular/core';
import { UtilService } from '../../shared/services/util.service';
import { markdown } from './keyframes.markdown';
import { bounceLeft } from './animations';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.scss'],
  animations: [bounceLeft]
})
export class KeyframesComponent {
  courses: string[];
  easingTs1: string;
  easingTs2: string;

  constructor(private utilService: UtilService) {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
    this.easingTs1 = this.utilService.typescript(markdown.easingTs1);
    this.easingTs2 = this.utilService.typescript(markdown.easingTs2);
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
