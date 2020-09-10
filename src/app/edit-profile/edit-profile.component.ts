import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'], 
})
export class EditProfileComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;  

  userData: any;  
  
  newUserData = {
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

  constructor(private formService: FormService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.formService.currentData.subscribe(newUserData => this.newUserData = newUserData);
    // this.userData = this.formService.formUserData;
  }

  onSave() {    
    this.newUserData.firstName = this.signupForm.value.firstname;
    this.newUserData.lastName = this.signupForm.value.lastname;
    this.newUserData.age = this.signupForm.value.age;
    this.newUserData.nationality = this.signupForm.value.nationality;
    this.newUserData.languages = this.signupForm.value.language;
    this.newUserData.height = this.signupForm.value.height;
    this.newUserData.phone = this.signupForm.value.phone;
    this.newUserData.email = this.signupForm.value.email;
    this.newUserData.proffesion = this.signupForm.value.proffesion;

    this.formService.getNewData(this.newUserData);  
    this.router.navigate(['/home']);
  }
}
