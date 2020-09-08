import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FirstName: string = 'Dawid';
  LastName: string = 'Karbowniczek';
  Age: number = 30;
  Nationality: string = 'Poland';
  Languages: string = 'Polish, English';
  Height: number = 184;
  Phone: number = 123456789;
  Email: string = 'dawinczi06@gmail.com';
  Proffesion: string = "Frontend Developer";

  constructor() { }

  ngOnInit(): void {
  }

}
