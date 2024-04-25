import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, map, switchMap } from 'rxjs';
import { AnyProd, NationalProd, Product } from 'src/app/interface/product';
import { Ventas } from 'src/app/interface/ventas';
import { NationalProdService } from 'src/app/services/nationalProd';
import { VentasService } from 'src/app/services/ventas';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  displayedColumns: string[] = ['product','stock', 'price', 'dateSell','vendedor','rol','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _ventasService: VentasService, private _snackBar: MatSnackBar, private prod :NationalProdService) { }

  productNames: { [id: number]: string } = {};

  dataSource!: MatTableDataSource<Ventas>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarVentas(){
    this._ventasService.consultarVentas().subscribe((datos : Ventas[])=>{
      this.dataSource = new MatTableDataSource(datos);
  });    
}
  ngOnInit(): void {
    this.cargarVentas();
  }
  deleteVentas(id: number){
    this._ventasService.deleteVenta(id).subscribe({
      next: () => {
        this._snackBar.open('Registro eliminado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.cargarVentas();  // Mover esta línea aquí
      },
      error: (error) => console.error(`Error al eliminar usuario con ID ${id}:`, error)
    });   

  }

}
