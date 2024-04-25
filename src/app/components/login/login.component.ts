import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuario';
import { SharedService } from 'src/app/services/shared';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cargando = false; 
  form_login: FormGroup;


  constructor(private fb: FormBuilder,  private _snackBar: MatSnackBar, private router: Router, private _usuarioService : UsuarioService
    ,private sharedService: SharedService ) { 
    this.form_login = this.fb.group({
            user: ['', Validators.required],
            clave: ['', Validators.required]
         })
    }
  
  ngOnInit(): void {
      
  }
  

  Ingresar(): void {
    const user = this.form_login.value.user;
    const clave = this.form_login.value.clave;

  
    this._usuarioService.login(user, clave).subscribe(
      (userId: any) => {
        if(userId != 0 ){
          
          this._usuarioService.getRol(userId).subscribe(
            (rol: any) => {
              this.face_cargando(rol.rol, userId);
           });
         
        }else {
          alert("Usuario o clave incorrectas")
          this.form_login.reset();
        }
      },
    );
  }
  
  

  error(){
    this._snackBar.open('Usuario o contraseña incorrecto', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }


  face_cargando(rol : string, idPerson : number){
    this.cargando = true;
    this.sharedService.changeRol(rol);
    this.sharedService.changeId(idPerson);
    setTimeout(() =>{ 
      this.router.navigate(['dashboard']);
   }, 1500);
}
      



}
