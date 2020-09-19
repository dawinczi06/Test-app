import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  userData: IUser;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataservice.currentData$.subscribe(userData => this.userData = userData);               
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
