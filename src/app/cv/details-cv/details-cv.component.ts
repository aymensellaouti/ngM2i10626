import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { DefaultImagePipe } from "../pipes/default-image-pipe";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv.set(this.cvService.findCvById(id));
    if (!this.cv()) this.router.navigate([APP_ROUTES.cv]);
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
