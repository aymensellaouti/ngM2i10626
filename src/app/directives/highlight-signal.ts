import { Directive, HostBinding, HostListener, input, Input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightSignal]',
  host: {
    '(mouseleave)':'this.onMouseLeave()',
    '(mouseenter)':'this.onMouseEnter()',
    '[style.backgroundColor]':'this.bgc()'
  }
})
export class HighlightSignal implements OnInit{

  in = input('yellow');

  out = input('red');
  // Modifier l'apparence
  // Dire quelle apparence modifier (ca peut être color background border)

  bgc = signal(this.out());
    ngOnInit(): void {
    this.bgc.set(this.out());
  }

  // Modifier le comportement d'un élément du DOM
  // quel comportement et suite à quelle événement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc.set(this.in());
  }

  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
