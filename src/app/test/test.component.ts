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
  public isContatcDissable=true;
  eventName;
  message;
  addNewContact;


  //create user type object

  user:User={
    fname:'Thilini',
    lname:'Wathsala',
    contact:["0711236547","0714569854"]

  }

  addContact(event){
   this. isContatcDissable=false;
   this.addNewContact=prompt("enter number");
    
     }

     showEnable($event){
      this.user.contact.push(this.addNewContact);
       this.isContatcDissable=true;
     }



  //public col=["pink","orange","black"];

  showDetails(event){
    this.isDissable=false;
  }
  hideDetails(event){      // check ngIf
    this.isDissable=true;
  }

  //check ngSwitch
  public color=prompt("enter your color");


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
