import { TypeOfProduct } from "components";
import { IProduct } from "interfaces/interfaces";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	noTextUnder:{
		textDecoration:"unset",
		gridColumn:"span 3",
		cursor:"pointer",
		position:"relative",
		color:"#000",
		transition:".3s all",
		// "&:hover $productMenu":{
		// 	transform:"translateX(0px)"
		// },
		"&:hover":{
			boxShadow:"2px 2px 6px #b5a7a7, 2px 2px 6px #b5a7a7"
		},
		"& > .product":{
			margin:"10px",
			"& > .name":{
				height:"70px"
			}
		}
	},
	imageProduct:{
		width:"200px",
		height:"300px",
		objectFit:"cover"
	},
	flex:{
		display:"flex",
		justifyContent:"center"
	},
	"@media (max-width:900px)":{
		noTextUnder:{
			gridColumn:"span 6"
		}
	},
	"@media (max-width:600px)":{
		noTextUnder:{
			gridColumn:"span 12"
		}
	}
});

const Product: React.FC<IProduct> = (pros: IProduct) => {
  const { imageUrl, id, name, price, types } = pros;
  const classes = useStyles();
  return (
	<>
	  <a className={classes.noTextUnder} href={`/product-detail/${id}`}>
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
	  </a>
	</>
  );
};
export default Product;