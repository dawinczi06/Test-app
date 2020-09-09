import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [FormService]
})
export class EditProfileComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  
  testData = {
    name: 'Jan',
    surname: 'Kowalski'
  }

  constructor(private formService: FormService, private router: Router) { 
    this.formService.onSubmitForm(this.testData);
  }

  ngOnInit(): void {
  }

  onSave() {
    this.testData.name = this.signupForm.value.firstname;
    console.log(this.formService.formUserData.firstName);
    this.formService.formUserData.firstName = this.signupForm.value.firstname;   
    console.log(this.formService.formUserData.firstName); 
    // this.router.navigate(['/home']);

  }

}
