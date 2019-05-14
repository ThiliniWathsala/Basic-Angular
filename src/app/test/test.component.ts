import { Component, OnInit } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { User} from '../test/test.module';

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


  //create user type object

  user:User={
    fname:'Thilini',
    lname:'Wathsala'

  }

  showDetails(event){
    this.isDissable=false;
  }
  hideDetails(event){
    this.isDissable=true;
  }


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
