import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONST } from '../../config/constants.config';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'Nares', 'Malik', 'Dev', '12345678', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Monnier', 'Julien', 'Dev', '12345677', 20, 'rotating_card_profile2.png'),
    new Cv(3, 'Le Mechec', 'Jerome', 'Dev', '12345688', 20, 'rotating_card_profile3.png'),
    new Cv(4, 'Cabaret', 'Kevin', 'Dev', '12345699', 20, ''),
    new Cv(5, 'Sellaouti', 'Aymen', 'Dev', '12345600', 20, '         '),
  ]);
  http = inject(HttpClient);
  #selectedCv = signal<Cv | null>(null);
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }

  /**
   * Retourne la liste des cvs
   * @returns Observable Cv[]
   */
  getCvsFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne un cv via son id
   *
   * @param id: l'id du cv à récupérer
   * @returns Observable Cv
   */
  getCvByIdFromApi(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   * Supprime un Cv via son id
   *
   * @param id: l'id du cv à supprimer
   * @returns Observable Cv
   */
  deleteCvByIdFromApi(id: number): Observable<{ count: number }> {
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update((actualsCv) => actualsCv.filter((cvEnCours) => cvEnCours != cv));
  }

  /**
   * Elle cherche les cvs dont la valeur de la propriété mentionnée est égale à la valeur soumise
   *
   * @param property le nom du champ de recherche
   * @param value la valeur du champ de recherche
   * @returns Observable Cv[]
   */
  getCvsByProperty(property: string, value: string): Observable<Cv[]> {
    const params = new HttpParams().set('filter', `{"where":{"${property}":"${value}"}}`);
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }

  /**
   * Définir le cv sélectionné
   * @param cv : Cv qui représente le cv qui vient d'être sélectionné
   */
  selectCv(cv: Cv): void {
    this.#selectedCv.set(cv);
  }
}
