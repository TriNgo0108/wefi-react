import { Expand, Footer, MainHeader, TypeOfProduct } from "components";
import products from "models/product.model";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { createUseStyles } from "react-jss";
import { useNavigate, useParams } from "react-router";

const useStyles = createUseStyles({
    marginTop:{
     marginTop:"10px"   
    },
    body:{
        margin:"0px 2vw",
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
        }
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
        }
	},
});
const ProductDetail : React.FC = ()=>{
    const navigate = useNavigate();
    const param = useParams();
    const {id} = param;
    const classes = useStyles();
    const product = products.find(product => product.id === id);
    const goBack = () =>{
        navigate(-1);
    }
    return(<>
    <MainHeader/>
    <div className={classes.marginTop}>
        <div className={classes.body}>
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
                        <div className="quanlity">
                            <p>Quanlity:</p>
                            <select name="quanlity" id="quanlity">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                        <p className="customer">Maximum 3 units per customer</p>
                        <button className={classes.button}>ADD TO CART</button>
                        <div className="flex ship">
                            <AiFillCar/>
                            <span>Free Shipping $100+</span>
                        </div>
                        <Expand title="Description" >
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                        </Expand>
                        <Expand title="Questions & Answer">
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                        </Expand>
                        <Expand title="Shipping Delay & Returns">
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
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