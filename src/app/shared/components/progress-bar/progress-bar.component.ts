import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  progress: number;

  color: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    if (this.progress < 20) {
      this.color = 'progress-bar-danger';
      return;
    }
    if (this.progress < 40) {
      this.color = 'progress-bar-warning';
      return;
    }
    if (this.progress < 60) {
      this.color = 'progress-bar-info';
      return;
    }
    if (this.progress < 80) {
      return;
    }
    if (this.progress < 100) {
      this.color = 'progress-bar-success';
    }
  }
}
