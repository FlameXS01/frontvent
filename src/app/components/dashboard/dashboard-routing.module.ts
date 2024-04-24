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
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuarioComponent},//lista
    {path: 'usuarios/crear-usuario', component: CrearUsuarioComponent, data: { estado: 'crear' }},
    {path: 'usuarios/crear-usuario/:id', component: CrearUsuarioComponent, data: { estado: 'modificar' }},
    {path: 'foreinProd/crear-prod', component: ListarProdComponent},//lista
    {path: 'forein-product', component: ForeinProductComponent},
    {path: 'national-prod', component: NationalProdComponent},//lista
    {path: 'national-prod/crear-prod', component: NationalProductComponent},
    {path: 'usuarios/modificar/', component: CrearUsuarioComponent },
    
    {path: 'ventas/crear-venta', component: CrearVentaComponent},
    {path: 'ventas', component: VentasComponent},// lista
    {path: 'categorias', component: CategoriaComponent},// lista
    {path: 'categoria/crear-categoria', component: CrearCategoriaComponent},

  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
