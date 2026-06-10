import { Component, signal } from '@angular/core';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { TwoWay } from "./components/two-way/two-way";
import { RotatingCard } from "./components/rotating-card/rotating-card";

@Component({
  // Si tu veux appeler ce composant crée une balsie <app-root/>
  selector: 'app-root',
  // importe tous ce qui est nécessaire pour le HTML
  imports: [RotatingCard],
  // c'est le html que je gére (moi le composant)
  templateUrl: './app.html',
  // Le style associé uniquement à ce composant
  styleUrl: './app.css'
})
export class App {
  // State : Son état représenté par les attributs

  // Behaviour: Comportement, représenté par les méthodes
}
