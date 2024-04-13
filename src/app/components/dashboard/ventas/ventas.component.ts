import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ventas } from 'src/app/interface/ventas';
import { VentasService } from 'src/app/services/ventas';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  displayedColumns: string[] = ['stock', 'price', 'dateSell','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _ventasService: VentasService, private _snackBar: MatSnackBar) { }

  lista_ventas: Ventas [ ] = [ ];
 
  dataSource!: MatTableDataSource<any>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarVentas(){
    this._ventasService.consultarVentas().subscribe(datos=>{
      this.dataSource = new MatTableDataSource(datos);
    });    

    //////////
    // this.lista_ventas = this._ventasService.cargar_ventas();
    // this.dataSource = new MatTableDataSource(this.lista_ventas);
  }
  ngOnInit(): void {
    this.cargarVentas();
  }
  deleteVentas(index: number){
    this._ventasService.deleteProduct(index);
    this.cargarVentas();
    this._snackBar.open('Usuario eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
