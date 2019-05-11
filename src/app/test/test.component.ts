import { Component, OnInit } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name:string="Thilini ";
  public isDissable=true;    //property binding
  eventName;
  message;

  showName(){
    return "hello "+this.name;
  }

  showMwsssage(event){
    this.eventName=event.type;
    this.message='button is working';
    
    

  }


  constructor() { }

  ngOnInit() {
  }

}
