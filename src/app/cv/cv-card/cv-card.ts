import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.html',
  styleUrl: './cv-card.css',
})
export class CvCard {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toastr.success(`Le cv de ${cv.firstname} ${cv.name} a bien été embauché`);
      } else {
        this.toastr.warning(`Le cv de ${cv.firstname} ${cv.name} est déjà pré sélectionné`);
      }
    }
  }
}
