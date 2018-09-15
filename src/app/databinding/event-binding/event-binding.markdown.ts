export const markdown: any = {
  eventBinding: '<button (click)="callback()">Click</button>',
  eventBindingOn: '<button on-click="callback()">Click</button>',
  eventBindingEnter: '<input (keyup.enter)="callback()"></input>',
  eventBindingExamples: `<input (keydown.escape)="callback()">
<input (keydown.a)="callback()">
<input (keydown.esc)="callback()">
<input (keydown.shift.esc)="callback()">
<input (keydown.control)="callback()">
<input (keydown.alt)="callback()">
<input (keydown.meta)="callback()">
<input (keydown.9)="callback()">
<input (keydown.tab)="callback()">
<input (keydown.backspace)="callback()">
<input (keydown.arrowup)="callback()">
<input (keydown.shift.arrowdown)="callback()">
<input (keydown.shift.control.z)="callback()">
<input (keydown.f4)="callback()">`
};
