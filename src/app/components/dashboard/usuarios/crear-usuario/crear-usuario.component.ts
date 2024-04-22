import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    {value: 'cliente', viewValue: 'Cliente'},
  ];

  constructor( private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService, private _snackBar: MatSnackBar)  { 
    this.form_usuario = this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      address:['', Validators.required],
      phoneNumber:['', Validators.required],
      rol:['', Validators.required],
      user:['', Validators.required], 
      clave:['', Validators.required], 

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
     
      name: this.form_usuario.value.name,
      lastName: this.form_usuario.value.lastName,
      address: this.form_usuario.value.address,
      phoneNumber: this.form_usuario.value.phoneNumber,
      rol: this.form_usuario.value.rol,
      user:{
        user: this.form_usuario.value.user,
        clave:this.form_usuario.value.clave,
        }
    }

    this._usuarioService.agregarUsuario(user).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/usuarios']); 
          this._snackBar.open('Usuario creado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      },
      (error) => {
        console.error(error);
      }); 

}

}
