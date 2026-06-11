import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  template: `
    <div class="alert alert-secondary">
      <p>Hello {{ name() }}</p>
    </div>
  `,
  styles: ``,
})
export class Second {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  name = signal(this.acr.snapshot.params['name']);
  constructor() {
    if (this.name() == 'aymen') {
      this.router.navigate(['cv']);
    }
  }
}
