import { Injectable } from '@angular/core';
import { Ventas } from '../interface/ventas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private servicio:HttpClient) { }

  ventasList: Ventas[] = [
      
    ];
    servidor = "http://localhost:8000/api";

    consultarVentas(): Observable<any>{
      return this.servicio.get(`${this.servidor}/ventas`);
    }

  cargar_ventas(){
    return this.ventasList.slice();
  }

  deleteVenta(id: number){
    return this.servicio.delete(`${this.servidor}/ventas/deleteVentas/${id}`);
  }

  

  agregarVentas(ventas: Ventas){
    this.ventasList.unshift(ventas);
  }


}
