import { AnyProd, Product } from "./product";

export interface Categoria {
    idCategory?: number;
    name: string ;
    products?: Product[];
}