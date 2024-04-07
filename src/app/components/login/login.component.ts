import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cargando = false; 
  form_login: FormGroup;


  constructor(private fb: FormBuilder,  private _snackBar: MatSnackBar, private router: Router) { 
    this.form_login = this.fb.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
         })
    }
  
  ngOnInit(): void {
      
  }
  Ingresar(){
    const usuario = this.form_login.value.usuario;
             const password = this.form_login.value.password;
             if (usuario == 'admin' && password == 'admin123') {
                   // redireccionamos al dashboard
                   this.face_cargando();
             }else{
               //mostrando mensaje de error mediante una función
                	this.error();
                  this.form_login.reset();

             }
  }
  error(){
    this._snackBar.open('Usuario o contraseña incorrecto', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }


  face_cargando(){
    this.cargando = true;
    setTimeout(() =>{ 
      this.router.navigate(['dashboard']);
   }, 1500);
  }
      



}
