import { Component, signal } from '@angular/core';

@Component({
  // Si tu veux appeler ce composant crée une balsie <app-root/>
  selector: 'app-root',
  // importe tous ce qui est nécessaire pour le HTML
  imports: [],
  // c'est le html que je gére (moi le composant)
  templateUrl: './app.html',
  // Le style associé uniquement à ce composant
  styleUrl: './app.css'
})
export class App {
  // State : Son état représenté par les attributs
  protected readonly title = signal('ngM2i10626');

  // Behaviour: Comportement, représenté par les méthodes
}
