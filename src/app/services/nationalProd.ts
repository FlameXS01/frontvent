import { Injectable } from '@angular/core';
import { NationalProd } from '../interface/nationalProd';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



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

  deleteProduct(index: number){
    this.nationalProdList.splice(index, 1);
  }

  

  agregarNationalProd(nationalProd: NationalProd){
    this.nationalProdList.unshift(nationalProd);
  }


}
