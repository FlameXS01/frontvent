import { Injectable } from '@angular/core';
import { ForeignProd } from '../interface/foreigProd';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ForeignProdService {

  constructor(private servicio:HttpClient) { }

   foreignProdList: ForeignProd[] = [
   
  ];
  servidor = "http://localhost:8000/api";
  
 consultarForeignProd(): Observable<any>{
    return this.servicio.get(`${this.servidor}/foreignProd`);
  }


  cargar_foreignProd(){
    return this.foreignProdList.slice();
  }

  deleteProduct(id: number){
    return this.servicio.delete(`${this.servidor}/foreignProd/deleteForeign/${id}`);
  }

  

  agregarForeignProd(foreignProd: ForeignProd){
    this.foreignProdList.unshift(foreignProd);
  }


}
