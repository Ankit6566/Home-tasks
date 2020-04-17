import { Component, OnInit } from '@angular/core';
import {AppConstants} from 'src/app/constantfile';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   constants;

  title = 'my-app2';
  ngOnInit(){
    this.constants = AppConstants
  }
}
