import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  readonly defaultColor = 'red';
  color = signal(this.defaultColor);

  changeColor(newColorInput: HTMLInputElement) {
    this.color.set(newColorInput.value);
    newColorInput.value = '';
  }

  reset() {
    this.color.set(this.defaultColor);
  }
}
