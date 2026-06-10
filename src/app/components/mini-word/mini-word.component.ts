import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule]
})
export class MiniWordComponent {
  // State
  color = signal('red');
  fontSize = signal(70);
  fontFamily = signal('garamond')
}
