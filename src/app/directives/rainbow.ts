import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    '(keyup)': 'this.onKeyUp()',
    '[style.color]': 'this.color()',
    '[style.borderColor]': 'this.color()'
  }
})
export class Rainbow {
  // State
  color = signal('black');
  constructor() {
    console.log('appRainbow');
  }
  // Behaviour
  onKeyUp() {
    this.color.set(this.getRandomColor());
  }
  private getRandomColor(): string {
    const randomColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
      return randomColor;
  }
}
