import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  imports: [],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class NgclassComponent {
  isOn = signal(false);
  interrupteur() {
    this.isOn.update((on) => !on)
  }
}
