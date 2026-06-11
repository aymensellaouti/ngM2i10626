import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  // uuid = inject('UUID')
  log(message: unknown): void {
    console.log({message});
  }
}
