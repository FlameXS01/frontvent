import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  lista_usuarios: Usuario[] = [
    {usuario: 'jcmartinez', nombre: 'Julio', apellidos: 'Companioni Martinez', rol: 'Admin', estado: 'activo'},  
  ];

  cargar_usuarios(){
    return this.lista_usuarios.slice();
  }

  eliminar_usuario(index: number){
    this.lista_usuarios.splice(index, 1);
  }

  


}
