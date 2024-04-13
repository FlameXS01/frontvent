export interface Usuario{
    idPerson?: number;
    name: string;
    lastName:string;
    address:string;
    phoneNumber:number;
    rol:string;
    user:{
        user: string;
        clave: string;
    };
}



