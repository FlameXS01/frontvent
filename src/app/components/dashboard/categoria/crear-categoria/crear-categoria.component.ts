import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria';
import { Categoria } from 'src/app/interface/categoria';


@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {
  constructor( private fb: FormBuilder, private _categoryService: CategoriaService, private _snackBar: MatSnackBar, private router: Router)  { 
    this.form_categoria = this.fb.group({
      name:['', Validators.required],
      })
  
  }
  form_categoria: FormGroup; 
 
  ngOnInit(): void {
  }

  agregarCategoria(){
    const categ: Categoria = {
        name: this.form_categoria.value.name,
        
    }
    this._categoryService.agregarCategoria(categ).subscribe(
      (response) => {
        this.router.navigate(['/dashboard/categorias']); 
          this._snackBar.open('Categoría creada correctamente', '', {
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
