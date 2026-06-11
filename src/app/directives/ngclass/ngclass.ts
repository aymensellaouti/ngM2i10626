import { Component, signal } from '@angular/core';
import { Highlight } from "../highlight";
import { HighlightSignal } from "../highlight-signal";
import { Rainbow } from "../rainbow";

@Component({
  selector: 'app-ngclass',
  imports: [Highlight, HighlightSignal, Rainbow],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class NgclassComponent {
  isOn = signal(false);
  interrupteur() {
    this.isOn.update((on) => !on)
  }
}
