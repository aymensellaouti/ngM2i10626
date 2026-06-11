import { Component, inject, input, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../services/logger-service';

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  today = signal(new Date());
  cvs = signal<Cv[]>([
    new Cv(1, 'Nares', 'Malik', 'Dev', '12345678', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Monnier', 'Julien', 'Dev', '12345677', 20, 'rotating_card_profile2.png'),
    new Cv(3, 'Le Mechec', 'Jerome', 'Dev', '12345688', 20, 'rotating_card_profile3.png'),
    new Cv(4, 'Cabaret', 'Kevin', 'Dev', '12345699', 20, ''),
    new Cv(5, 'Sellaouti', 'Aymen', 'Dev', '12345600', 20, '         '),
  ]);
  logger = inject(LoggerService);
  selectedCv = signal<Cv | null>(null);
  constructor() {
    this.logger.log('cc je suis le cvComponent')
  }
}
