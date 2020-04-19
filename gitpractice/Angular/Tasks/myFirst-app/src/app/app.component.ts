import { Component, OnDestroy, OnInit } from '@angular/core';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';
import {AppConstants} from  'src/app/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit{
  constants;
  title = 'myFirst-app';
  input="some input from component variablle"
   Outputdemo:string
   ngDestroyDemoVariable=true;
ngOnInit(){
this.constants = AppConstants;
}

   somethingHandler(event : any){
     this.Outputdemo=event;
   }
   ngOnDestroy() {
    console.log('APP ngOnDestroy ');
    
  }
}
