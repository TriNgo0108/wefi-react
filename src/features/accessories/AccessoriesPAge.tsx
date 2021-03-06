import { Footer, MainHeader, Product, ToolBar } from "components";
import React from "react";
import { createUseStyles } from "react-jss";
import products from "models/product.model";
const useStyles = createUseStyles({
    products:{
      margin:"10px",
      display:"grid",
      gridTemplateColumns:"repeat(12,1fr)",
      gridGap:"20px"
    }
  });
const AccessoriesPage : React.FC = () =>{
    const onChange = (event: Event) => {
        console.log("ID", (event.target as HTMLInputElement).value);
      };
    const classes = useStyles();
 return (
     <div>
         <MainHeader></MainHeader>
         <ToolBar page={0} pagePerNumber={5} onChange={onChange}></ToolBar>
         <div className={classes.products}>
        {products.map((product) => {
          return product.kind === "accessories" && (
            <Product key={product.id}
              price={product.price}
              name={product.name}
              imageUrl={product.imageUrl}
              types={product.types}
              id={product.id}
            ></Product>
          );
        })}
      </div>
      <Footer></Footer>
     </div>
 );
}

export default AccessoriesPage;