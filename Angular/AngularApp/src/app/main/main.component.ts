import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  ngOnInit() {
  }
  title = 'AngularApp';
  myName='';
  myRoll='';
  location:string='Kalady';
  status:boolean=false;
  count:number=0;

  constructor (){
    setTimeout(() => {
      this.status=true;
    }, 5000);
  }
  clickMe=()=>{
    if(this.count%2==0)
    {
      this.myName='New Name';
      this.count++;
    }
    else
    {
      this.myName='Jayasankar';
      this.count++;
    }
    
  }

  
  getStatus()
  {
    return this.status;
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.myName=form.value.getName;
    this.myRoll=form.value.getRoll;
  }

}
