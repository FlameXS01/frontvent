import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentasService } from 'src/app/services/ventas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  form_venta: FormGroup; 

  constructor(private fb: FormBuilder, private _ventasService: VentasService,  private _snackBar: MatSnackBar, private router: Router)  { 
    this.form_venta = this.fb.group({
      stock: ['', Validators.required],
      price: ['', Validators.required],
      dateSell: ['', Validators.required],
      idPerson: ['', Validators.required],
      idProduct: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarVenta(){
    const venta: Ventas = {
      stock: this.form_venta.value.stock,
      price: this.form_venta.value.price,
      dateSell: this.form_venta.value.dateSell,
      idPerson: this.form_venta.value.idPerson,
      idProduct: this.form_venta.value.idProduct
    }
    this._ventasService.agregarVentas(venta).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/ventas']); 
          this._snackBar.open('Producto creado correctamente', '', {
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
