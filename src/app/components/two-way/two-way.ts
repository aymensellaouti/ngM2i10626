import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css',
})
export class TwoWay {
  two = 'valeur initiale';
}
