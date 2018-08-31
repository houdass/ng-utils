import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*form = new FormGroup({
    topics: new FormArray([])
  });*/

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
