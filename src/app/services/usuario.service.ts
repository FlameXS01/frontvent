import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

  eliminar_usuario(index: number){
    this.lista_usuarios.splice(index, 1);
  }

  

  agregarUsuario(usuario: Usuario){
    this.lista_usuarios.unshift(usuario);
  }


}
