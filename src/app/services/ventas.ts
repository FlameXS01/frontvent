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
        {
            stock: 50,
            price: 10,
            dateSell: new Date('2024-04-09'),
            idPerson: 1,
            idProduct: 1
        },
        {
            stock: 60,
            price: 15,
            dateSell: new Date('2024-04-10'),
            idPerson: 2,
            idProduct: 2
        }
    ];
    servidor = "http://localhost:8000/api";

    consultarVentas(): Observable<any>{
      return this.servicio.get(`${this.servidor}/ventas`);
    }

  cargar_ventas(){
    return this.ventasList.slice();
  }

  deleteProduct(index: number){
    this.ventasList.splice(index, 1);
  }

  

  agregarVentas(ventas: Ventas){
    this.ventasList.unshift(ventas);
  }


}
