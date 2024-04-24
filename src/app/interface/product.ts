export interface Product {
        idProduct:number;
        name: string;
        description: string;
        price: number;
        weight: number;
        stock: number;
        createAt: Date;
        expireAt: Date;
        idCategory: number;
      }
      
      export interface ForeignProd {
        idForeign?: number;
        country: string;
        buyPrice: number;
        product: Product;
      }
      
      export interface NationalProd {
        idNational?: number;
        maker: string;
        buyPrice: number;
        product: Product;
      }
      
      export type AnyProd = ForeignProd | NationalProd ;
      