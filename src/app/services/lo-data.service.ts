import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoDataService {

  private defaultLODialogStatus = new BehaviorSubject(false);
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  defaultLODialogCurrentStatus = this.defaultLODialogStatus.asObservable()

  constructor() { }

  changeMessage(message: boolean) {
    this.defaultLODialogStatus.next(message)
  }
}
