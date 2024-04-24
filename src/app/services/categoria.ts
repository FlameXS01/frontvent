import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private servicio:HttpClient) { }

  categoriaList: Categoria[] = [
   
  ];
  servidor = "http://localhost:8000/api";
  
 consultarCategoria(): Observable<any>{
    return this.servicio.get(`${this.servidor}/categories`);
  }


  cargar_categorias(){
    return this.categoriaList.slice();
  }

  deleteCategoriaList(id: number){
    return this.servicio.delete(`${this.servidor}/categories/deleteUser/${id}`);
  }

  

  agregarCategoria(categoria: Categoria){
    return this.servicio.post(`${this.servidor}/categories/createUser`, categoria);

  }


}
