export interface ForeignProd {
    country: string;
    buyPrice: number;
    product:{
         name: string;
        description: string;
        price: number;
        weight: number;
        stock: number;
        createAt: Date;
        expireAt: Date;
        idCategory: number;
}
   
}