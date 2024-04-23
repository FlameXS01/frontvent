import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  cargarUsuario(id: number) {

  }

  constructor(private servicio:HttpClient) { }

  servidor = "http://localhost:8000/api";

  consultarNationalProdProd(): Observable<any>{
    return this.servicio.get(`${this.servidor}/person`);
  }

  lista_usuarios: Usuario[] = [
  ];

  cargar_usuarios(){
    return this.lista_usuarios.slice();
  }

  eliminar_usuario(id: number){
    
      return this.servicio.delete(`${this.servidor}/person/deletePerson/${id}`);
    
  
  }

  

  agregarUsuario(usuario: Usuario){
    return this.servicio.post(`${this.servidor}/person/createPerson`, usuario);


  }


}
