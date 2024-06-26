import { Component, OnInit } from '@angular/core';
import { NationalProd } from 'src/app/interface/nationalProd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationalProdService } from 'src/app/services/nationalProd';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/interface/categoria';
import { CategoriaService } from 'src/app/services/categoria';


@Component({
  selector: 'app-crear-prod',
  templateUrl: './crear-prod.component.html',
  styleUrls: ['./crear-prod.component.css']
})
export class NationalProductComponent {
  constructor( private fb: FormBuilder,  private _categorieService: CategoriaService ,private _nationalProdService: NationalProdService, private _snackBar: MatSnackBar, private router: Router)  { 
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

  categories!: Categoria[];

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
        category: this.form_producto.value.idCategory,
      }
    }
    this._nationalProdService.agregarNationalProd(prodN).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/national-prod']); 
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
