import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMessengerService {

  private data = new BehaviorSubject({});
  messengerData = this.data.asObservable();

  constructor() { }

  sendData(data: any): void {
    this.data.next(data);
  }
}
