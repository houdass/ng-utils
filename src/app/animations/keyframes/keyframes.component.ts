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
  keyframesTs: string;

  constructor(private utilService: UtilService) {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
    this.keyframesTs = this.utilService.typescript(markdown.keyframesTs);
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
