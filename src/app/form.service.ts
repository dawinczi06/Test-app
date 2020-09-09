import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formUserData = {
  firstName: 'Dawidek',
  lastName: 'Karbowniczek',
  age: 30,
  nationality: 'Poland',
  languages: 'Polish, English',
  height: 184,
  phone: 123456789,
  email: 'dawinczi06@gmail.com',
  proffesion: 'Fronted Developer'
  };

  constructor() { }

  onSubmitForm () {
    return this.formUserData;
       
  }
}
