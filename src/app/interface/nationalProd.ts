export interface NationalProd {
    idNational?: number;
    maker: string;
    buyPrice: number;
    product:{
        name: string;
        description: string;
        price: number;
        weight: number;
        stock: number;
        createAt: Date;
        expireAt: Date;
        category: number;
}
   
}
