import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  form_venta: FormGroup; 

  constructor(private fb: FormBuilder)  { 
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
    // Here you can add the code to process the 'venta' object
  }
}
