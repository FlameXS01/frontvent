import { ChangeDetectorRef, Component } from '@angular/core';
import { Categoria } from 'src/app/interface/categoria';
import { Product } from 'src/app/interface/product';
import { CategoriaService } from 'src/app/services/categoria';
import { NationalProdService } from 'src/app/services/nationalProd';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  categories!: Categoria[];

  constructor(private categoriaService: CategoriaService, private productService: NationalProdService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.categoriaService.consultarCategoria().subscribe(
      (categorias: Categoria[]) => {
        this.categories = categorias;
        this.categories.forEach(categoria => {
          if (categoria.idCategory !== undefined) {
            
            this.productService.getProductsByCategory(categoria.idCategory).subscribe(
              (products: Product[]) => {
                categoria.products = products;
                this.cdr.detectChanges(); 
              },
              (error) => {
                console.error(error);
              }
            );
        } else {
            // Manejar el caso en que categoria.idCategory es undefined
        }
         
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
