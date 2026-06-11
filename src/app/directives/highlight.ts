import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit{
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // Modifier l'apparence
  // Dire quelle apparence modifier (ca peut être color background border)
  @HostBinding('style.backgroundColor')
  bgc = this.out;
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  // Modifier le comportement d'un élément du DOM
  // quel comportement et suite à quelle événement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
