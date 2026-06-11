import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../pipes/default-image-pipe';

@Component({
  selector: 'app-cv-item',
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  cv = input.required<Cv>();

  selectCv = output<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv());
  }
}
