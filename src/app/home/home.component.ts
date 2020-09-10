import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FormService]
})
export class HomeComponent implements OnInit {

  userData = {
    firstName: '',
    lastName: '',
    age: null,
    nationality: '',
    languages: '',
    height: null,
    phone: null,
    email: '',
    proffesion: '' 
  };


  constructor(private formservice: FormService) { }

  ngOnInit(): void {
    // this.formservice.currentData.subscribe(data => this.userData = data);
    this.userData = this.formservice.formUserData;    
    console.log(this.userData);       
  }

}
