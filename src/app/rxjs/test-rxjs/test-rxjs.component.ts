import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-rxjs',
    templateUrl: './test-rxjs.component.html',
    styleUrls: ['./test-rxjs.component.css'],
    standalone: true,
    imports: [AsyncPipe],
})
export class TestRxjsComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);

  constructor() {
    // 5 4 3 2 1
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });

    this.myObservable$.subscribe({
      next: value => console.log(value)
    })
    // setTimeout(() => {
      this.myObservable$
        // 5 4 3 2 1
        .pipe(
          map(value => value * 3),
          // 15 12 9 6 3
          filter(value => value % 2 == 0)
          // 12 6
        )
        .subscribe({
          next: (data) => {
            this.toastr.info('' + data);
          },
          complete: () => {
            this.toastr.warning('BOOOM !!!!');
          },
        })
    // },3000);
    }

  ngOnDestroy(): void {

  }
}
