import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";

export function uniqueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    // return authService.findUserByEmail(control.value).pipe(
    //   map((response) => {
    //     // Si pas d’erreur on retourne null
    //     // S’il y a une erreur on retourne un objet décrivant l’erreur
    //   }),
    // );
  };
}
