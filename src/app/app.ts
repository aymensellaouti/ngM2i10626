import { Component } from '@angular/core';
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./commInterCompo/pere/pere";

@Component({
  // Si tu veux appeler ce composant crée une balsie <app-root/>
  selector: 'app-root',
  // importe tous ce qui est nécessaire pour le HTML
  imports: [TtcComponent, Pere],
  // c'est le html que je gére (moi le composant)
  templateUrl: './app.html',
  // Le style associé uniquement à ce composant
  styleUrl: './app.css'
})
export class App {
  // State : Son état représenté par les attributs

  // Behaviour: Comportement, représenté par les méthodes
}
