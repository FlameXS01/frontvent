import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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

  modo: 'crear' | 'modificar' = 'crear';

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private _usuarioService: UsuarioService,
    private _snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    
    
  )  {
    this.idTempo =  0;  
    if (this.modo === 'crear') {
      this.form_usuario = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        rol: ['', Validators.required],
        user: ['', Validators.required], 
        clave: ['', Validators.required], 
      });
    } else  {
      this.form_usuario = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        rol: ['', Validators.required],
        user: [''], 
        clave: [''], 
      });
    }
    
  }
  form_usuario: FormGroup; 
idTempo : number;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const estado = params['estado'];
      if (estado === 'modificar') {
        const id = this.route.snapshot.params['id'];
        this.idTempo = id;
        this.modo = 'modificar';    
        this.cargarUsuario(id);
      } else {
        this.modo = 'crear';                  
      }
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
modificarUsuario(){
  const user: Usuario = {
    name: this.form_usuario.value.name,
    lastName: this.form_usuario.value.lastName,
    address: this.form_usuario.value.address,
    phoneNumber: this.form_usuario.value.phoneNumber,
    rol: this.form_usuario.value.rol,
    user: {
      id: this.idTempo,
      user: this.form_usuario.value.user,
      clave: this.form_usuario.value.clave
    }
  }
    this._usuarioService.modificarUsuario(user, this.idTempo).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/usuarios']); 
          this._snackBar.open('Usuario modificado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  cargarUsuario(id: number){    
  this._usuarioService.cargarUsuario(id).subscribe({
    next: (resp: any) => { // Añade ': any' aquí
      console.log(resp);
      // Asigna los valores al formulario
      this.form_usuario.patchValue({
        name: resp.name,
        lastName: resp.lastName,
        address: resp.address,
        phoneNumber: resp.phoneNumber,
        rol: resp.rol,
        id:resp.user.user,
        user: resp.user.user, // Accede al valor de 'user' dentro del objeto 'user'
        clave: resp.user.clave // Accede al valor de 'clave' dentro del objeto 'user'
      });
    },
    error: () => {
      // Maneja el error
    }
  });
} 

  
gestionarUsuario(){
  if (this.modo == 'crear') {
    this.agregarUsuario();
  } else if(this.modo == 'modificar') {
    this.modificarUsuario();
  }
}

}
