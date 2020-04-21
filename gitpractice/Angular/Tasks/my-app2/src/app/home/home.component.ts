import { Component, OnInit } from '@angular/core';
import {AppConstants} from 'src/app/constantfile';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constants;
  constructor() { }

  ngOnInit(): void {
    this.constants = AppConstants;
  }

}
