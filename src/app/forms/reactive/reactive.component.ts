import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  /* form = new FormGroup({
    topics: new FormArray([])
  }); */

  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(index: number) {
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics');
  }
}
