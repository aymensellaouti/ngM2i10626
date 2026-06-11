import { Component, inject, input, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../services/logger-service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  cvService = inject(CvService);
  today = signal(new Date());
  cvs = this.cvService.getCvs();
  logger = inject(LoggerService);
  selectedCv = this.cvService.selectedCv;
  toastr = inject(ToastrService);

  constructor() {
    this.toastr.info('Bienvenu dans notre CvTech :D')
    this.logger.log('cc je suis le cvComponent');
  }
}
