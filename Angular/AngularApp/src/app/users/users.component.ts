import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  fetchData:any=[];
  constructor(private apiService:ApiserviceService) { 
    this.onGetData();
  }

  onGetData(){
    this.apiService.getServerData().subscribe(
      (newData:any[])=>{console.log(newData);this.fetchData=newData},
      (error)=>console.log(error)
    );
  }

  ngOnInit() {
  }

}
