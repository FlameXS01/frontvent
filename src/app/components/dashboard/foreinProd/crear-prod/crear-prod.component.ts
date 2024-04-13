import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ForeignProd } from 'src/app/interface/foreigProd';
import { ForeignProdService } from 'src/app/services/foreignProd';

@Component({
  selector: 'app-crear-prod',
  templateUrl: './crear-prod.component.html',
  styleUrls: ['./crear-prod.component.css']
})
export class ListarProdComponent {
  displayedColumns: string[] = ['country', 'name', 'description', 'price', 'weight', 'expireAt','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _foreinService: ForeignProdService, private _snackBar: MatSnackBar) { }

  lista_foreinProd: ForeignProd [ ] = [ ];
 
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
    this.lista_foreinProd = this._foreinService.cargar_foreignProd();
    this.dataSource = new MatTableDataSource(this.lista_foreinProd);
  }
  ngOnInit(): void {
    this.cargarUsuario();
  }
  deleteProduct(index: number){
    this._foreinService.deleteProduct(index);
    this.cargarUsuario();
    this._snackBar.open('Usuario eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
