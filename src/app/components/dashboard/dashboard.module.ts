import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    UsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule, 
    
  ],
})
export class DashboardModule { }
