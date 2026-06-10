import { Component, signal } from '@angular/core';
// import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-ng-style',
  imports: [],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyleComponent {
  color = signal('yellow')
}
