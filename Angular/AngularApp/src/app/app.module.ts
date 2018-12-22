import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import {RouterModule,Routes} from '@angular/router';
import{AboutComponent} from './about/about.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import {ApiserviceService}from './apiservice.service';

const appRoutes:Routes=[
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayComponent,
    AboutComponent,
    MainComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiserviceService],
  bootstrap: [NavbarComponent,AppComponent]
})
export class AppModule { }
