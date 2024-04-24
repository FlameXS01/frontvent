import { Injectable } from '@angular/core';
import { NationalProd } from '../interface/nationalProd';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';



@Injectable({
  providedIn: 'root'
})
export class NationalProdService {

  constructor(private servicio:HttpClient) { }

   nationalProdList: NationalProd[] = [
  ];
  servidor = "http://localhost:8000/api";

  consultarNationalProd(): Observable<any>{
    console.log(this.servicio.get(`${this.servidor}`));
    return this.servicio.get(`${this.servidor}/nationalProd`);

  }

  cargar_nationalProd(){
    return this.nationalProdList.slice();
  }

  deleteProduct(id: number){
    return this.servicio.delete(`${this.servidor}/nationalProd/deleteUser/${id}`);
  }

  

  agregarNationalProd(nationalProd: NationalProd){
    return this.servicio.post(`${this.servidor}/nationalProd/createNationalN`, nationalProd);

  }

  todosLosProd(): Observable<any>{
    return this.servicio.get(`${this.servidor}/product`);

  }
  getProductsByCategory(idCategoria: number): Observable<Product[]> {
    return this.servicio.get<Product[]>(`${this.servidor}/product/getprodbyCateg/${idCategoria}`);
  }
}
