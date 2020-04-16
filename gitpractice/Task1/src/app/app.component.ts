import { Component, OnDestroy } from '@angular/core';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'myFirst-app';
  input="some input from component variablle"
   Outputdemo:string
   ngDestroyDemoVariable=true;


   somethingHandler(event : any){
     this.Outputdemo=event;
   }
   ngOnDestroy() {
    console.log('APP ngOnDestroy ');
    // console.log('APP viewChildRefernce, contentChildRefernce', this.viewChildRefernce, this.contentChildRefernce);
  }
}
