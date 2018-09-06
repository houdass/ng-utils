import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceLeftInAnimation, bounceLeftOutAnimation } from './animations';

@Component({
  selector: 'app-use-animation',
  templateUrl: './use-animation.component.html',
  styleUrls: ['./use-animation.component.scss'],
  animations: [
    trigger('bounceLeft', [
      transition(':enter', useAnimation(bounceLeftInAnimation)),
      transition(':leave', useAnimation(bounceLeftOutAnimation))
    ])
  ]
})
export class UseAnimationComponent {
  courses: string[];
  useAnimationTs: string;

  constructor() {
    this.courses = ['Course 1', 'Course 2', 'Course 3'];
  }

  addCourse(course: HTMLInputElement): void {
    this.courses.push(course.value);
  }

  removeCourse(course: string): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
