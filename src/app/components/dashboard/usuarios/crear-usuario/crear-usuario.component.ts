import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  constructor( private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService)  { 
    this.form_usuario = this.fb.group({
      usuario:['', Validators.required],
      name:['', Validators.required],
      apellidos:['', Validators.required],
      password:['', Validators.required],
      rol:['', Validators.required],
      estado:['', Validators.required], 
      })
  
  }
  form_usuario: FormGroup; 
  ngOnInit(): void {
    this.form_usuario.valueChanges.subscribe(val => {
      console.log('Form validity: ', this.form_usuario.valid);
      console.log('Form value: ', this.form_usuario.value);
      console.log('Form status: ', this.form_usuario.status);
      console.log('Form errors: ', this.form_usuario.errors);
    });
  }
  
  
  agregarUsuario(){
    const user: Usuario = {
      usuario: this.form_usuario.value.usuario,
      name: this.form_usuario.value.name,
      apellidos: this.form_usuario.value.apellidos,
      rol: this.form_usuario.value.rol,
      estado: this.form_usuario.value.estado,
      password:this.form_usuario.value.password,
    }

    this._usuarioService.agregarUsuario(user); 
    this.router.navigate(['/dashboard/usuarios']);
}

}
