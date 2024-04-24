import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentasService } from 'src/app/services/ventas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared';
import { NationalProdService } from 'src/app/services/nationalProd';
import { AnyProd } from 'src/app/interface/product';
import { forkJoin } from 'rxjs';
import { ForeignProdService } from 'src/app/services/foreignProd';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  form_venta: FormGroup; 

  id!: number;
  rol! : string;
  products!: AnyProd[];

  constructor(
    private fb: FormBuilder,
    private _ventasService: VentasService,
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private sharedService: SharedService, 
    private _nationalProd : NationalProdService,
    private _foreignProd : ForeignProdService,

  )  { 
    this.form_venta = this.fb.group({
      stock: ['', Validators.required],
      price: ['', Validators.required],
      dateSell: ['', Validators.required],
      idProduct: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.sharedService.currentId.subscribe(id => this.id = id);
    this.sharedService.currentRol.subscribe(rol => this.rol = rol);
    forkJoin({
      nacionales: this._nationalProd.consultarNationalProd(),
      extranjeros: this._foreignProd.consultarForeignProd()
    }).subscribe(results => {
      this.products = [...results.nacionales, ...results.extranjeros];
    });

  }

  agregarVenta(){
    const venta: Ventas = {
      stock: this.form_venta.value.stock,
      price: this.form_venta.value.price,
      dateSell: this.form_venta.value.dateSell,
      idPerson: this.id,
      idProduct: this.form_venta.value.idProduct
    }
    this._ventasService.agregarVentas(venta).subscribe(
      (response) => {
        if (this.rol != "cliente"){
          this.router.navigate(['/dashboard/ventas']); 
        }else {
          this.router.navigate(['/dashboard/']); 
        }
          this._snackBar.open('Compra realizada correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      },
      (error) => {
        console.error(error);
      });
    }
}
