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

  cargarProd(){

    this._foreinService.consultarForeignProd().subscribe(datos=>{
      console.log(datos);
      this.dataSource = new MatTableDataSource(datos);
    });  
   }
  ngOnInit(): void {
    this.cargarProd();
  }
  deleteProduct(id: number){
    this._foreinService.deleteProduct(id).subscribe({
      next: () => {
        this._snackBar.open('Producto eliminado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.cargarProd();  
      },
      error: (error) => console.error(`Error al eliminar prodcuto con ID ${id}:`, error)
    });   
  }

}
