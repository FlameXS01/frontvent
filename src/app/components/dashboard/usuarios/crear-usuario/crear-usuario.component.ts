import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interface/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  roles: any[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'trabajador', viewValue: 'Trabajador'},
    {value: 'estudiante', viewValue: 'Estudiante'},
  ];
  estados: any[] = [
    {value: 'activo', viewValue: 'Activo'},
    {value: 'bloqueado', viewValue: 'Bloqueado'},
  ];
  constructor( private fb: FormBuilder)  { 
    this.form_usuario = this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      contrasena:['', Validators.required],
      rol:['', Validators.required],
      estado:['', Validators.required], 
      })
  
  }
  form_usuario: FormGroup; 
  ngOnInit(): void {
  }
  agregarUsuario(){
    const user: Usuario = {
      usuario: this.form_usuario.value.usuario,
      nombre: this.form_usuario.value.name,
      apellidos: this.form_usuario.value.apellidos,
      password: this.form_usuario.value.password,
      rol: this.form_usuario.value.rol,
      estado: this.form_usuario.value.estado,
    }
}

}
