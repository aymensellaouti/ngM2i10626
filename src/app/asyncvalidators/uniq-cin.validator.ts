import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { map, of } from "rxjs";

export function uniqueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      // Cv[] => null / {}
      map(cvs => cvs.length ? {uniqueCin: "Le cin doit être unique"} : null)
    )
  };
}
