import { Component } from '@angular/core';
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./commInterCompo/pere/pere";
import { CvPage } from "./cv/cv-page/cv-page";
import { NgStyleComponent } from "./directives/ng-style/ng-style";
import { MiniWordComponent } from "./components/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass";
import { TodoComponent } from "./todo/todo/todo.component";

@Component({
  // Si tu veux appeler ce composant crée une balsie <app-root/>
  selector: 'app-root',
  // importe tous ce qui est nécessaire pour le HTML
  imports: [TtcComponent, Pere, CvPage, NgStyleComponent, MiniWordComponent, NgclassComponent, TodoComponent],
  // c'est le html que je gére (moi le composant)
  templateUrl: './app.html',
  // Le style associé uniquement à ce composant
  styleUrl: './app.css'
})
export class App {
  // State : Son état représenté par les attributs

  // Behaviour: Comportement, représenté par les méthodes
}
