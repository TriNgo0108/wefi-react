import { IProduct } from "interfaces/interfaces";
import yourname_novel from "../images/yourname_novel.jpg";
import darling_01 from "../images/darling_01.jpg";
import rentAGirlFriend from "../images/rentAGirlFriend.jpg";
import wotakoi from "../images/wotakoi.jpg";
import classroom from "../images/classroom.jpg";
const products : IProduct[] = [{
    id:"11",
    name:"your name. (light novel) ",
    types:["in-stock"],
    price:"$18.00",
    imageUrl:yourname_novel
},
{
    id:"12",
    name:"My Dress-Up Darling 01 Paperback",
    types:["pre-order"],
    price:"$21.46",
    imageUrl:darling_01
},
{
    id:"13",
    name:"Rent-A-Girlfriend 11 Paperback",
    types:["pre-order"],
    price:"$11.69",
    imageUrl:rentAGirlFriend
},
{
    id:"14",
    name:"Wotakoi: Love is Hard for Otaku 1 Paperback",
    types:["pre-order","exclusive"],
    price:"$13.49",
    imageUrl:wotakoi
},
{
    id:"15",
    name:"Classroom of the Elite (Light Novel) Vol. 10 Paperback",
    types:["exclusive"],
    price:"$12.59",
    imageUrl:classroom
}
]

export default products;