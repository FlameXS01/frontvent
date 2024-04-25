import { ChangeDetectorRef, Component } from '@angular/core';
import { Categoria } from 'src/app/interface/categoria';
import { Product } from 'src/app/interface/product';
import { Ventas } from 'src/app/interface/ventas';
import { CategoriaService } from 'src/app/services/categoria';
import { NationalProdService } from 'src/app/services/nationalProd';
import { ProductService } from 'src/app/services/product';
import { VentasService } from 'src/app/services/ventas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  categories!: Categoria[];
  ventas! : any[];
  topSeller: any;
  mostSellProd : any;

  constructor(private categoriaService: CategoriaService, private productService: NationalProdService, private cdr: ChangeDetectorRef, private _ventasService : VentasService) { 
   
  }

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
    this._ventasService.consultarVentas().subscribe(
      (ventas: Ventas[]) => {
        this.ventas = ventas;
        this.topSeller = this.getTopSeller();
        this.mostSellProd = this.getMostSoldProduct();
      }
    );
    
  }

  getMostSoldProduct(): string {
    const productCount: { [name: string]: number } = {};

    for (let venta of this.ventas) {
      if (!productCount[venta.product.name]) {
        productCount[venta.product.name] = 0;
      }

      productCount[venta.product.name]++;
    }
    if (Object.keys(productCount).length === 0) {
      return '';
    }
    if(Object.keys(productCount).reduce((a, b) => productCount[a] > productCount[b] ? a : b)){
      return Object.keys(productCount).reduce((a, b) => productCount[a] > productCount[b] ? a : b);  
    }
    else{
      return 'no hay aunn ' ;
    }

  }

  getTopSeller(): string {
    const personCount: { [name: string]: number } = {};

  for (let venta of this.ventas) {
  if (!personCount[venta.person.name]) {
    personCount[venta.person.name] = 0;
  }
  personCount[venta.person.name]++;
}

    if (Object.keys(personCount).length === 0) {
      return '';
    }

    if(Object.keys(personCount).reduce((a, b) => personCount[a] > personCount[b] ? a : b) != null){
      return Object.keys(personCount).reduce((a, b) => personCount[a] > personCount[b] ? a : b);  
    }
    else{
      return 'no hay aunn ' ;
    }
   
  }
}
