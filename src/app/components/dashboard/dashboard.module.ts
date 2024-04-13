import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ListarProdComponent } from './foreinProd/crear-prod/crear-prod.component';
import { NationalProdComponent } from './national-prod/national-prod.component';
import { ForeinProductComponent } from './forein-product/forein-product.component';
import { NationalProductComponent } from './national-prod/crear-prod/crear-prod.component';
import { VentasComponent } from './ventas/ventas.component';
import { CrearVentaComponent } from './ventas/crear-venta/crear-venta.component';
import { HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    ListarProdComponent,
    NationalProdComponent,
    ForeinProductComponent,
    NationalProductComponent,
    VentasComponent,
    CrearVentaComponent,
    
    

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule, 
    
    
  ],
})
export class DashboardModule { }
