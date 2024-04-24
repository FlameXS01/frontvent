import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyProd, Product } from '../interface/product';


export class ProductService {

  constructor(private http: HttpClient) { }

  servidor = "http://localhost:8000/api";


  getProductsByCategory(idCategoria: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.servidor}/product/getprodbyCateg/${idCategoria}`);
  }
}
