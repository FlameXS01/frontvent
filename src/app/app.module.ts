import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';




@NgModule({
 
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    LoginComponent,
    AppComponent,
  ],
})
export class AppModule { }
