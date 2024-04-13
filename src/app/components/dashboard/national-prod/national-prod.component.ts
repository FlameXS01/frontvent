import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NationalProd } from 'src/app/interface/nationalProd';
import { NationalProdService } from 'src/app/services/nationalProd';

@Component({
  selector: 'app-national-prod',
  templateUrl: './national-prod.component.html',
  styleUrls: ['./national-prod.component.css']
})
export class NationalProdComponent {
  displayedColumns: string[] = ['maker', 'name', 'description', 'price', 'weight', 'expireAt','acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _nationalService: NationalProdService, private _snackBar: MatSnackBar) { }

  lista_nationalProd: NationalProd [ ] = [ ];
 
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
    this._nationalService.consultarNationalProd().subscribe(datos=>{
      console.log(datos);
      this.dataSource = new MatTableDataSource(datos);
    });    


    ////
    // this.lista_nationalProd = this._nationalService.cargar_nationalProd();
    // this.dataSource = new MatTableDataSource(this.lista_nationalProd);
  }
  ngOnInit(): void {
    this.cargarProd();
  }
  deleteProduct(index: number){
    this._nationalService.deleteProduct(index);
    this.cargarProd();
    this._snackBar.open('Producto eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
