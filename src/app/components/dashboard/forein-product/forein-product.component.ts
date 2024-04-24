import { Component, OnInit } from '@angular/core';
import { ForeignProd } from 'src/app/interface/foreigProd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForeignProdService } from 'src/app/services/foreignProd';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria';


@Component({
  selector: 'app-forein-product',
  templateUrl: './forein-product.component.html',
  styleUrls: ['./forein-product.component.css']
})
export class ForeinProductComponent {
  constructor( private fb: FormBuilder, private _categorieService: CategoriaService ,private _foreignProdService: ForeignProdService, private router: Router, private _snackBar: MatSnackBar )  { 
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
  categories! : Categoria[];
 
  ngOnInit(): void {
    this._categorieService.consultarCategoria().subscribe(
      (categorias) => {
        this.categories = categorias;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

    agregarForeignProd(){
      const prod: ForeignProd = {
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
          category: this.form_producto.value.idCategory,
          }
        }
            
    this._foreignProdService.agregarForeignProd(prod).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/foreinProd/crear-prod']); 
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


