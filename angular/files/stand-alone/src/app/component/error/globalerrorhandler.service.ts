import { ErrorHandler, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalerrorhandlerService implements ErrorHandler {
  private errorsSubject = new BehaviorSubject<boolean>(false);
  public errors$ = this.errorsSubject.asObservable(); 

  constructor() {}

  handleError(error: any): void {
    console.log('Error occurred:', error.message);
    this.errorsSubject.next(true); 
  }
}