import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ForeinProductComponent } from './forein-product/forein-product.component';
import { ListarProdComponent } from './foreinProd/crear-prod/crear-prod.component';
import { NationalProdComponent } from './national-prod/national-prod.component';
import { NationalProductComponent } from './national-prod/crear-prod/crear-prod.component';
import { VentasComponent } from './ventas/ventas.component';
import { CrearVentaComponent } from './ventas/crear-venta/crear-venta.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'usuarios/crear-usuario', component: CrearUsuarioComponent},
    {path: 'foreinProd/crear-prod', component: ListarProdComponent},
    {path: 'forein-product', component: ForeinProductComponent},
    {path: 'national-prod', component: NationalProdComponent},
    {path: 'national-prod/crear-prod', component: NationalProductComponent},
    {path: 'ventas', component: VentasComponent},
    {path: 'ventas/crear-venta', component: CrearVentaComponent},
    

  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
