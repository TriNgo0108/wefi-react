import { useAppSelector } from "app/hooks";
import { Center, Item } from "components";
import React from "react";
import { createUseStyles } from "react-jss";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import { deleteDollarSymbol, sumOfItem } from "utilities/calculateCart";
import { getProducts } from "./cartSlice";
import "./cart.css";

const useStyles = createUseStyles({
    bag:{
        textAlign:"left",
        position:"relative",
        marginBottom:"20px",
        fontSize:"1.5rem",
        "&:after":{
            position:"absolute",
            width:"15vw",
            height:"2px",
            bottom:"-30%",
            left:"0",
            backgroundColor:"rgba(0, 0, 0, 0.3)",
            content:`""`

        }
    },
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(12,1fr)",
        textAlign:"left",
        fontWeight:"bold",
        "& > .name":{
            gridColumn:"1/ span 5",
        },
        "& > .amount":{
            gridColumn:"6 / span 2"
        },
        "& > .price":{
            gridColumn:"8 / span 3",
        },
        "& > .sum":{
            gridColumn:"11 / span 1"
        },
    },
    total:{
        position:"relative",
        display:"grid",
        textAlign:"left",
        gridTemplateColumns:"repeat(12,1fr)",
        "& > .total_content":{
            gridColumn:"10 / span 2",
            position:"relative",
            fontSize:"1.5rem",
            display:"grid",
            gridTemplateColumns:"repeat(6,1fr)",
            "&:before":{
                position:"absolute",   
                content:`""`,
                width:"80%",
                height:"1px",
                backgroundColor:"rgba(0, 0, 0, 0.3)",
            },
            "& > .total_price":{
                gridColumn:"4 / span 1"
            }
        }
    },
    button:{
        gridColumn:"1 / span 6",
        color:"#fff",
        width:"80%",
        border:"1px #ff0 solid",
        cursor:"pointer",
        height:"45px",
        fontSize:"1rem",
        transition:".8s all",
        borderRadius:"10px",
        backgroundColor:"#fab818",
        "&:hover":{
            backgroundColor:"#0f0"
        }
    },
})

const CartContent :React.FC = () =>{
    const products = useAppSelector(getProducts);
    const classes = useStyles();
    let total = 0;
    products?.forEach((product)=>{
        const nonDollarPrice = deleteDollarSymbol(product.product?.price as string);
        total += sumOfItem(nonDollarPrice,product.quantity as number);
    });
    return<>
    <Center>
        <h4 className={classes.bag}>Items in your bag</h4>
        <div className={classes.grid}>
            <p className="name">Name</p>
            <p className="amount">Amount</p>
            <p className="price">Price</p>
            <p className="sum">Sum</p>
        </div>
        <TransitionGroup>
        {products?.map((product,index)=>{
            // return <Item key={index} quantity={product.quantity} product={product.product}/>
            return <CSSTransition classNames="item" key={index} timeout={800}>
                        <Item  quantity={product.quantity} product={product.product}/>
                    </CSSTransition>
        })}
        </TransitionGroup>
        <div className={classes.total}>
            <div className="total_content">
                <h5>Total:</h5>
                <h5 className="total_price">
                    {`$${total.toFixed(2)}`}
                </h5>
                <button className={classes.button} onClick={()=>{}}>Check out</button>
            </div>
        </div>
    </Center>
    </>
};
export default CartContent;