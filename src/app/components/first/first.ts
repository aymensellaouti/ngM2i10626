import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {

  // propriétés | attributs => Etat / State
  name = "Malik";
  // méthodes => Comportement | Behaviour
  message = '';
  isHidden = false;
  constructor() {
    // setTimeout(() => {
    //   this.name = "Kevin"
    // }, 2500);
    // setInterval(() => {
    //   this.isHidden = !this.isHidden
    // },1000)
    // setInterval(() => {
    //   {
    //     console.log(this.name);
    //   }
    // }, 1000);
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  // getName() {
  //   console.log("je process getName");

  //   return this.name;
  // }
}

// Vue = f(State) => SYNCHRONE
