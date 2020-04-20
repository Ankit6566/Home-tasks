import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-databindingdemo',
  templateUrl: './databindingdemo.component.html',
  styleUrls: ['./databindingdemo.component.css']
})
export class DatabindingdemoComponent implements OnInit {
  stringbinding = 'this is databinding example';
  classname="design";
  show:string;
  @Input("some")
    inputbind:string;
  constructor() { }

  ngOnInit(): void {
  }

  handlerEvent(event){
    alert("this is clicked"+event);
  }
  displayInput(event){
    const inputValue=event.target.value;
    this.show=inputValue;
  }



}
