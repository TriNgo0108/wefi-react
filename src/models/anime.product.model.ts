import { IProduct } from "interfaces/interfaces";
import violet from "../images/violet.webp";
import mizuhara from "../images/mizuhara.webp";
import belle from "../images/belle.jpg";
import yourname from "../images/yourname.jpg";
import konosuba from "../images/konosuba.jpg";

const products : IProduct[] = [{
    id:"6",
    name:"Violet Evergarden I: Eternity And The Auto Memory Doll - Movie Blu-Ray",
    types:["in-stock"],
    price:"$22.30",
    imageUrl:violet
},
{
    id:"7",
    name:"Rent A Girlfriend - Complete Collection",
    types:["in-stock"],
    price:"$69.98",
    imageUrl:mizuhara
},
{
    id:"8",
    name:"BELLE (2021)",
    types:["in-stock"],
    price:"$26.98",
    imageUrl:belle
},
{
    id:"9",
    name:"Your Name. [Blu-ray]",
    types:["in-stock"],
    price:"$19.99",
    imageUrl:yourname
},
{
    id:"10",
    name:"Konosuba 2 The Complete Second Season [Blu-ray]",
    types:["in-stock"],
    price:"$36.00",
    imageUrl:konosuba
}
];
export default products;