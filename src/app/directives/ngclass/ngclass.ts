import { Component, signal } from '@angular/core';
import { Highlight } from "../highlight";
import { HighlightSignal } from "../highlight-signal";

@Component({
  selector: 'app-ngclass',
  imports: [Highlight, HighlightSignal],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class NgclassComponent {
  isOn = signal(false);
  interrupteur() {
    this.isOn.update((on) => !on)
  }
}
