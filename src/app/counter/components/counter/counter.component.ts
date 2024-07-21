import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click) = "increaseBy(1)">+1</button>
    <button (click) = "resetCounter()">Reset</button>
    <button (click) = "increaseBy(2)">-1</button>
  `
})

export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  increaseBy(value: number): void {
    if (value == 1)
    this.counter +=  1;
    if (value == 2)
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
