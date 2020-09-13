import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormService } from '../form.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  userData: IUser;

  constructor(private formservice: FormService) { }

  ngOnInit(): void {
    this.subscription = this.formservice.currentData$.subscribe(userData => this.userData = userData);
    // this.userData = this.formservice.formUserData;             
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
