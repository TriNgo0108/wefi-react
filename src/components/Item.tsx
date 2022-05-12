import { useAppDispatch } from "app/hooks";
import { decreaseQuantityProduct, increaseQuantityProduct } from "features/cart/cartSlice";
import { IQuantityProduct } from "interfaces/interfaces";
import React from "react";
import { createUseStyles } from "react-jss";
import { deleteDollarSymbol, sumOfItem } from "utilities/calculateCart";

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12,1fr)",
    alignItems: "center",
    textAlign: "left",
    margin: "10px 0px",
    "& > .item_name": {
      gridColumn: "1/ span 5",
    },
    "& > .item_amount": {
      gridColumn: "6 / span 2",
      "& > .increase": {
        color: "#fff",
        marginRight: "10px",
        backgroundColor: "#00ff00a8",
        width:"30px",
        height:"30px",
        textAlign:"center",
        borderRadius:"4px",
        cursor:"pointer",
        transition:".8s all",
        "&:hover":{
            boxShadow:"2px 2px  #7f767694, -2px -2px #7f767694"
        }
      },
      "& > .decrease": {
        marginLeft: "10px",
        backgroundColor: "#ff0000a8",
        color: "#fff",
        width:"30px",
        height:"30px",
        textAlign:"center",
        borderRadius:"4px",
        cursor:"pointer",
        transition:".8s all",
        "&:hover":{
            boxShadow:"2px 2px  #7f767694, -2px -2px #7f767694"
        }
      },
    },
    "& > .item_price": {
      gridColumn: "8 / span 3",
    },
    "& > .item_sum": {
      gridColumn: "11 / span 2",
    },
    "& > .flex": {
      display: "flex",
      alignItems: "center",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "100px",
      height: "150px",
      marginRight: "10px",
      objectFit:"cover"
    },
  },
});

// const deleteDollarSymbol = (price: string): string => {
//   const normalizePrice = price.trim();
//   const nonDollarSymbol = normalizePrice.slice(1);
//   return nonDollarSymbol;
// };
// const sumOfItem = (price: string, quantity: number): number => {
//   const priceNumber = Number.parseFloat(price);
//   if (isNaN(priceNumber)) return 0;
//   return priceNumber * quantity;
// };

const Item: React.FC<IQuantityProduct> = (props: IQuantityProduct) => {
  const { quantity, product } = props;
  const classes = useStyles();
  const sum = sumOfItem(
    deleteDollarSymbol(product?.price as string),
    quantity as number
  );
  const dispatch = useAppDispatch();
  const onIncreaseClick = () =>{
      dispatch(increaseQuantityProduct(product));
  }
  const onDecreaseClick = () => {
      dispatch(decreaseQuantityProduct(product));
  }
  return (
    <>
      <div className={classes.grid}>
        <div className="item_name">
          <div className={classes.flex}>
            <img src={product?.imageUrl} alt="item" />
            <p>{product?.name}</p>
          </div>
        </div>
        <div className="item_amount flex">
          <div className="increase" onClick={onIncreaseClick}>+</div>
          {quantity}
          <div className="decrease" onClick={onDecreaseClick}>-</div>
        </div>
        <div className="item_price">{product?.price}</div>
        <div className="item_sum">{`$${sum}`}</div>
      </div>
    </>
  );
};
export default Item;
