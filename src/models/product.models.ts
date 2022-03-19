import { IProduct } from "interfaces/interfaces";
import mai from "../images/mai.webp";
import nino from "../images/nino-nakano.webp";
import toradora from "../images/toradora-taiga.webp";
import alice from "../images/alice-synthesis.webp";
import barbara from "../images/barbara-musical.webp";
const products: IProduct[] = [
  {
    id: "1",
    name: "Rascal Does Not Dream Of Bunny Girl Senpai - Mai Sakurajima Figure (Chinese Dress Ver)",
    price: "$199.99",
    types: ["pre-order"],
    imageUrl: mai,
  },
  {
    id: "2",
    name: "The Quintessential Quintuplets - Nino Nakano 1/8 Scale Figure",
    price: "$114.99",
    types: ["in-stock"],
    imageUrl: nino,
  },
  {
    id: "3",
    name: "Toradora! - Taiga Aisaka 1/7 Scale Wedding Dress Ver.",
    price: "$225.99",
    types: ["in-stock"],
    imageUrl: toradora,
  },
  {
    id: "4",
    name: "Sword Art Online - Alice Synthesis Thirty 1/7 Scale Figure",
    price: "$232.99",
    types: ["in-stock"],
    imageUrl: alice,
  },
  {
    id:"5",
    name:"Genshin Impact - Barbara Musical Figure",
    price:"$179.99",
    types:["pre-order"],
    imageUrl:barbara
  }
];
export default products;
