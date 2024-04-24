export interface Usuario{
    idPerson?: number;
    name: string;
    lastName:string;
    address:string;
    phoneNumber:number;
    rol:string;
    user:{
        id?: number;
        user: string;
        clave: string;
    };
}



