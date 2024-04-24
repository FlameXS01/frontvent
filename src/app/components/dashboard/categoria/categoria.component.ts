import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  displayedColumns: string[] = [ 'name','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _categoriesService: CategoriaService, private _snackBar: MatSnackBar) { }

  lista_categorias: Categoria [ ] = [ ];
 
  dataSource!: MatTableDataSource<any>;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarCategoria(){
    this._categoriesService.consultarCategoria().subscribe(datos=>{
      console.log(datos);
      this.dataSource = new MatTableDataSource(datos);
    });    


}
  ngOnInit(): void {
    this.cargarCategoria();
  }
  deleteCategory(id: number){
    this._categoriesService.deleteCategoriaList(id).subscribe({
      next: () => {
        this._snackBar.open('Producto eliminado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        this.cargarCategoria();  
      },
      error: (error) => console.error(`Error al eliminar Categoria con ID ${id}:`, error)
    });

  }

}
