import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  /* form = new FormGroup({
    topics: new FormArray([])
  }); */

  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(index: number): void {
    this.topics.removeAt(index);
  }

  get topics(): any {
    return this.form.get('topics');
  }
}
