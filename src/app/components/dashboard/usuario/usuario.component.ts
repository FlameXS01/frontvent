import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  displayedColumns: string[] = ['user', 'name', 'lastName','phoneNumber', 'rol', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

 
  dataSource!: MatTableDataSource<any>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarUsuario(){

      this._usuarioService.consultarNationalProdProd().subscribe(datos=>{
      this.dataSource = new MatTableDataSource(datos);
    });    


    //////////////////////////
    // this.lista_usuarios = this._usuarioService.cargar_usuarios();
    // this.dataSource = new MatTableDataSource(this.lista_usuarios);
  }
  ngOnInit(): void {
    this.cargarUsuario();
  }
  eliminarUsuario(id: number){  

    this._usuarioService.eliminar_usuario(id).subscribe({
      next: () => this._snackBar.open('Usuario eliminado correctamente', '', {
         duration: 1500,
         horizontalPosition: 'center',
         verticalPosition: 'bottom'
         }),
      error: (error) => console.error(`Error al eliminar usuario con ID ${id}:`, error)
    });    
    
    this.cargarUsuario();    
    
     
    }
 


}



