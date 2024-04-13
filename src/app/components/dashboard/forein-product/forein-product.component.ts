import { Component, OnInit } from '@angular/core';
import { ForeignProd } from 'src/app/interface/foreigProd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForeignProdService } from 'src/app/services/foreignProd';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forein-product',
  templateUrl: './forein-product.component.html',
  styleUrls: ['./forein-product.component.css']
})
export class ForeinProductComponent {
  constructor( private fb: FormBuilder, private _foreignProdService: ForeignProdService, private router: Router )  { 
    this.form_producto = this.fb.group({
      country:['', Validators.required],
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

    agregarForeignProd(){
      const user: ForeignProd = {
        country: this.form_producto.value.country,
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
          this._foreignProdService.agregarForeignProd(user); 
          this.router.navigate(['/dashboard/foreinProd/crear-prod']);
  }
}


