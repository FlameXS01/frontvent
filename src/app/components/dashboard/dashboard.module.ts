import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    
    

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule, 
    
    
  ],
})
export class DashboardModule { }
