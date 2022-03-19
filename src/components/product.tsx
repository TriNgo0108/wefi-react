import { TypeOfProduct } from "components";
import { IProduct } from "interfaces/interfaces";
import React from "react";
import { createUseStyles } from "react-jss";
import {AiFillHeart} from "react-icons/ai"
import {IoAdd} from "react-icons/io5"

const useStyles = createUseStyles({
	noTextUnder:{
		textDecoration:"unset",
		gridColumn:"span 3",
		cursor:"pointer",
		position:"relative",
		color:"#000",
		transition:".3s all",
		"&:hover $productMenu":{
			transform:"translateX(0px)"
		},
		"&:hover":{
			boxShadow:"2px 2px 6px #b5a7a7, 2px 2px 6px #b5a7a7"
		},
		"& > .product":{
			margin:"10px",
		}
	},
	imageProduct:{
		width:"200px",
		height:"300px"
	},
	flex:{
		display:"flex",
		justifyContent:"center"
	},
	productMenu:{
		position:"absolute",
		right:"10px",
		top:"10px",
		display:"flex",
		flexDirection:"column",
		transition:" .3s all",
		transform:"translateX(-60px)",
		zIndex:"-1",
		"&  svg":{
			fontSize:"24px",
			color:"#f00"
		}
	},
	icon:{
		width:"40px",
		height:"40px",
		borderRadius:"50px",
		border:"1px #f00 solid",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		marginBottom:"20px",
		
	}
});

const Product: React.FC<IProduct> = (pros: IProduct) => {
  const { imageUrl, id, name, price, types } = pros;
  const classes = useStyles();
  return (
	<>
	  <a className={classes.noTextUnder} href={id}>
		<div className="product">
		  <div>
			<img className={classes.imageProduct} src={imageUrl} alt="productImage" />
		  </div>
		  <div className="name">
			<p>{name}</p>
		  </div>
		  <div className={classes.flex}>
			  {
				  types?.map((type)=>{
					  return <TypeOfProduct type={type}></TypeOfProduct>
				  })
			  }
		  </div>
		  <div className="price">
			  <p>{price}</p>
		  </div>
		</div>
		<div className={classes.productMenu }>
			<div className={classes.icon}>
				<AiFillHeart/>
			</div>
			<div className={classes.icon}>
				<IoAdd/>
			</div>
		</div>
	  </a>
	</>
  );
};
export default Product;