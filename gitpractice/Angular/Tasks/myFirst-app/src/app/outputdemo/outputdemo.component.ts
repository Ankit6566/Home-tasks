import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputdemo',
  templateUrl: './outputdemo.component.html',
  styleUrls: ['./outputdemo.component.css']
})
export class OutputdemoComponent implements OnInit {

  constructor() { }
  
   @Output() somethingChanged:EventEmitter<string> =  new EventEmitter() 

  ngOnInit(): void {
  }
 
  handleKeyPress(event : any){
    const inputText=event.target.value;
    this.somethingChanged.emit(inputText);
   

  }

}
