import { IProduct } from "interfaces/interfaces";
import klee from "../images/klee.jpg";
import miko from "../images/miko.png";
import sakura from "../images/cardcaptor-sakura.webp";
import megunmi from "../images/megumin-keychain.webp";
import sword from "../images/sword.webp";
const products : IProduct[] = [{
    id:"16",
    name:"Airdots 3 Genshin Impact (Klee) Edition",
    types:["pre-order","exclusive"],
    price:"$63",
    imageUrl:klee
},
{
    id:"17",
    name:"The Miko Keyboard",
    types:["pre-order","exclusive"],
    price:"$100",
    imageUrl:miko
},
{
    id:"18",
    name:"CR Loves Cardcaptor Sakura: Clear Card - Wings Enamel Pin Set",
    types:["exclusive","in-stock"],
    price:"$35.00",
    imageUrl:sakura
},
{
    id:"19",
    name:"KonoSuba - Megumin Keychain",
    types:["in-stock"],
    price:"$7.96",
    imageUrl:megunmi
},
{
    id:"20",
    name:"Demon Slayer Vulcan Edition Kamado Tanjiro Sword",
    types:["pre-order"],
    price:"$70",
    imageUrl:sword
}
];

export default products;
