import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formUserData = {
    firstName: 'Dawid',
    lastName: 'Karbowniczek',
    age: 30,
    nationality: 'Poland',
    languages: 'Polish, English',
    height: 184,
    phone: 123456789,
    email: 'dawinczi06@gmail.com',
    proffesion: 'Fronted Developer'
  };

  private dataSource = new BehaviorSubject(this.formUserData);
  public get currentData$(): Observable<any>{
    return this.dataSource.asObservable();
  }
  currentData = this.dataSource.asObservable();
  // newData: any;

  constructor() { }

  // getData (data) {
  //   this.formUserData = data;
  //   console.log(this.formUserData);
  // }

  getNewData(newdata) {
    this.dataSource.next(newdata);
    console.log(this.formUserData);
  }

}
