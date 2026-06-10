import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  defaultColor = 'red';
  color = this.defaultColor;

  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
