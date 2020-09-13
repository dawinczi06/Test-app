import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formUserData: IUser = {
    firstName: 'Dawid',
    lastName: 'Karbowniczek',
    age: 30,
    nationality: 'PL',
    languages: 'Polish, English',
    height: 184,
    phone: 123456789,
    email: 'dawinczi06@gmail.com',
    proffesion: 'Fronted Developer'
  };

  private dataSource = new BehaviorSubject(this.formUserData);
  public get currentData$(): Observable<IUser>{
    return this.dataSource.asObservable();
  }  

  constructor() { }

  getNewData(newdata) {
    this.dataSource.next(newdata);
    // console.log(this.formUserData);
  }

}
