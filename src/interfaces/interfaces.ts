export interface IProduct {
    id?:string;
    name?:string;
    types?:string[];
    price?:string;
    imageUrl?:string;
    kind?:string;
    description?:string;
    preOrder?:string;
    questions?:IReview[];
    shipping?:string;
}
export interface IReview{
    avatarUrl?:string;
    comment?:string;
    username?:string;
    time?:string;
    isStore?:boolean;
}

export interface IAuthor{
    name?:string;
    alias?:string;
    imageUrl?:string;
    description?:string;
}
export interface IQuantityProduct{
    quantity?:number;
    product?:IProduct;
}