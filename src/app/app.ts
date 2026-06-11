import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./composants/navbar/navbar";
import { TestForm } from "./templateDriveform/test-form/test-form";
import { TestRxjsComponent } from "./rxjs/test-rxjs/test-rxjs.component";

@Component({
  // Si tu veux appeler ce composant crée une balsie <app-root/>
  selector: 'app-root',
  // importe tous ce qui est nécessaire pour le HTML
  imports: [RouterOutlet, Navbar, TestForm, TestRxjsComponent],
  // c'est le html que je gére (moi le composant)
  templateUrl: './app.html',
  // Le style associé uniquement à ce composant
  styleUrl: './app.css'
})
export class App {
  // State : Son état représenté par les attributs

  // Behaviour: Comportement, représenté par les méthodes
}
