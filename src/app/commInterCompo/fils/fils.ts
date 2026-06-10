import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  // @Input()
  messageDePapa = input.required({
    alias: 'message',
    // transform: (valeur) => {
    //   return "Papa a dit : " + valeur
    // }
  });

  sendMessageToPapa = output<string>();

  onSendMessageToPapa() {
    this.sendMessageToPapa.emit("ok mais je vais garder la monnaie :D")
  }
}
