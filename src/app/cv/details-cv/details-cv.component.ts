import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  cv = toSignal(
    this.cvService.getCvByIdFromApi(this.acr.snapshot.params['id']).pipe(
      catchError((e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      }),
    ),
    { initialValue: null },
  );
  router = inject(Router);
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // //this.cv.set(this.cvService.findCvById(id));
    // this.cvService.getCvByIdFromApi(id).subscribe({
    //   next: (cv) => {
    //     this.cv.set(cv);
    //   },
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    // });
    // if (!this.cv())
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvByIdFromApi(cv.id).subscribe({
        next: (cv) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
