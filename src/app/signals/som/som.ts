import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.html',
  styleUrl: './som.css',
})
export class Som {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());

  names = signal(['Malik','Jerome','Julien','kevin']);
  addName() {
    this.names.update((namesArray) => ([
      ...namesArray,
      'aymen'
    ]))
  };
  namesNumber = computed(() => this.names().length);

  doubleZ = computed(() => {
    console.log('je calcule doubleZ');

    return 2 * this.z();
  });
  ddZ = computed(() => {
    return 2 * this.doubleZ();
  });

  chiffrePorteMalheurEffect = effect(
    () => {
      if (this.z() % 13 == 0) {
        alert("Attention 13 porte malheur !!!!")
      }
    }
  )
}
