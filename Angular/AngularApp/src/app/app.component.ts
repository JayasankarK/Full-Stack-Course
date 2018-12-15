import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  myName='Jayasankar';
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
}
