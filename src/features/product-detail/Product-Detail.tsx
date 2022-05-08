import { useAppDispatch, useAppSelector} from "app/hooks";
import { Expand, Footer, MainHeader, TypeOfProduct, Questions, DialogSlide } from "components";
import { addNewProduct } from "features/cart/cartSlice";
import { getToken } from "features/login/loginSlice";
import products from "models/product.model";
import React, { useState } from "react";
import { AiFillCar, AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams } from "react-router";

const useStyles = createUseStyles({
    marginTop:{
     marginTop:"10px"   
    },
    body:{
        position:"relative",
        margin:"0px 2vw",
        overflow:"hidden",
        "&  .flex":{
            display:"flex",
            alignItems:"center"
        },
        "& > .go_back":{
            cursor:"pointer",
            transition:".3s all",
            "&:hover":{
                color:"#f00"
            }
        },
    },
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(12,1fr)"
    },
    col_6:{
        gridColumn:"span 6",
        "& > .image":{
            width:"40vw"
        },
        textAlign:"left",
        "& > .center":{
            textAlign:"center"
        },
        "& > .name":{
            fontSize:"1.5rem"
        },
        "& select":{
            width:"50px",
            height:"50px",
            textAlign:"center",
        },
        "& > .customer":{
            fontWeight:"bold"
        },
        "& > .ship":{
            width:"max-content",
            marginTop:"20px",
            fontSize:"20px",
            transition:".8s all",
            cursor:"pointer",
            "& > svg":{
                marginRight:"5px"
            },
            "&:hover":{
                color:"#f47521",
            }
        }
    },
    button:{
        color:"#000",
        width:"40vw",
        border:"1px #ff0 solid",
        cursor:"pointer",
        height:"45px",
        fontSize:"1rem",
        transition:".8s all",
        borderRadius:"10px",
        backgroundColor:"#fab818",
        "&:hover":{
            color: "white",
            backgroundColor:"#B22D29"
        }
    },
    "@media (max-width:900px)":{
		col_6:{
            gridColumn:"span 12"
        },
	},
});
const ProductDetail : React.FC = ()=>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const param = useParams();
    const {id} = param;
    const product = products.find(product => product.id === id);
    const isLogin = useAppSelector(getToken);
    const [isAdded,setAdded] = useState(false);
    const [isRequireLogin,setRequireLogin] = useState(false);
    const classes = useStyles();
    const goBack = () =>{
        navigate(-1);
    }
    const addToCart = ()=>{
        dispatch(addNewProduct({payload:product}));
        setAdded(true);
        setTimeout(()=>{
            setAdded(false);
        },1000);
    }
    const requireLoginDialogSlide = () =>{
        setRequireLogin(true);
        setTimeout(()=>{
            setRequireLogin(false);
        },1000)
    }
    return(<>
    <MainHeader/>
    <div className={classes.marginTop}>
        <div className={classes.body}>
            {
                isLogin ? 
                    <DialogSlide open={isAdded} color="rgb(0 255 0 / 70%)" text="This product has been added to cart" icon={<AiFillCheckCircle/>}/>:
                    <DialogSlide open={isRequireLogin} color="rgb(255 0 0 / 70%)" text="Please login to using this feature" icon={<AiFillCloseCircle/>}/>
            }
            <div className="flex go_back" onClick={goBack}>
                <BiArrowBack/>
                <span>Back</span>
            </div>
            <div className={classes.marginTop}>
                <div className={classes.grid}>
                    <div className={classes.col_6}>
                        <img className="image" src={product?.imageUrl} alt="product_image"/>
                    </div>
                    <div className={classes.col_6}>
                        <div className="flex center">
                            {product?.types?.map(type=> <TypeOfProduct type={type}/>)}
                        </div>
                        <div className="name">
                            <p>{product?.name}</p>
                        </div>
                        <div className="price">
                            <h3>{product?.price}</h3>
                        </div>
                        <div className="quantity">
                            <p>Quantity:</p>
                            <select name="quantity" id="quantity">
                                <option key={1} value={1}>1</option>
                                <option key={2} value={2}>2</option>
                                <option key={3} value={3}>3</option>
                            </select>
                        </div>
                        <p className="customer">Maximum 3 units per customer</p>
                        <button className={classes.button} onClick={isLogin ? addToCart : requireLoginDialogSlide}>ADD TO CART</button>
                        <div className="flex ship">
                            <AiFillCar/>
                            <span>Free Shipping $100+</span>
                        </div>
                        <Expand title="Description" >
                            {product?.description?.split("\n").map( line => <p>{line}</p>)}
                        </Expand>
                        <Expand title="Questions & Answer">
                            {product?.questions?.map((question,index)=>{
                                return <Questions key={index} username={question.username} avatarUrl={question.avatarUrl} comment={question.comment} time={question.time} isStore={question?.isStore}/>
                            })}
                        </Expand>
                        <Expand title="Shipping Delay & Returns">
                        {product?.shipping?.split("\n").map( line => <p>{line}</p>)}
                        </Expand>
                        <Expand title="Coronavirus Impact On All Orders"></Expand>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>)
}
export default ProductDetail;