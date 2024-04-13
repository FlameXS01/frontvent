import { Component, OnInit } from '@angular/core';
import { NationalProd } from 'src/app/interface/nationalProd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationalProdService } from 'src/app/services/nationalProd';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-prod',
  templateUrl: './crear-prod.component.html',
  styleUrls: ['./crear-prod.component.css']
})
export class NationalProductComponent {
  constructor( private fb: FormBuilder, private _nationalProdService: NationalProdService, private router: Router)  { 
    this.form_producto = this.fb.group({
      maker:['', Validators.required],
      buyPrice:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
      weight:['', Validators.required], 
      stock:['', Validators.required],
      createAt:['', Validators.required],
      expireAt:['', Validators.required], 
      idCategory:['', Validators.required], 
      })
  
  }
  form_producto: FormGroup; 
 
  ngOnInit(): void {
  }

  agregarNationalProd(){
    const prodN: NationalProd = {
      maker: this.form_producto.value.maker,
      buyPrice: this.form_producto.value.buyPrice,
      product:{
        name: this.form_producto.value.name,
        description: this.form_producto.value.description,
        price: this.form_producto.value.price,
        weight: this.form_producto.value.weight,
        stock: this.form_producto.value.stock,
        createAt: this.form_producto.value.createAt,
        expireAt: this.form_producto.value.expireAt,
        idCategory: this.form_producto.value.idCategory,
      }
          }
          this._nationalProdService.agregarNationalProd(prodN); 
          this.router.navigate(['/dashboard/national-prod']);
}

}
