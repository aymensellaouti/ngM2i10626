import { Component, inject, input, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from '../cvs-list/cvs-list';
import { CvCard } from '../cv-card/cv-card';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../services/logger-service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  cvService = inject(CvService);
  today = signal(new Date());
  isLoading = signal(true);
  erreur =signal('');
  cvs = toSignal(
    this.cvService.getCvsFromApi().pipe(
      tap(response=> {this.isLoading.set(false)}),
      catchError((e) => {
        this.erreur.set('y a une erreur')
        const fakeCvs = this.cvService.getCvs();
        return of(fakeCvs());
      }),
    ),
    {
      initialValue: [],
    },
  );
  logger = inject(LoggerService);
  selectedCv = this.cvService.selectedCv;
  toastr = inject(ToastrService);

  constructor() {
    this.toastr.info('Bienvenu dans notre CvTech :D');
    this.logger.log('cc je suis le cvComponent');
    // this.cvService.getCvsFromApi().subscribe({
    //   next: (cvs) => {
    //     this.cvs.set(cvs);
    //   },
    //   error: (e) => {
    //     const fakeCvs = this.cvService.getCvs();
    //     this.cvs.set(fakeCvs());
    //     this.toastr.error("Attention les datas sont fictives veuillez contacter l'admin !!");
    //   },
    // })
  }
}
