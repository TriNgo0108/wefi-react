import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IQuantityProduct } from "interfaces/interfaces";
import isEqual from "lodash.isequal";
import { v4 as uuidv4 } from 'uuid';


export interface cartState{
    products?:IQuantityProduct[],
    paymentStatus:"Pending" | "Paid",
}

const initialState : cartState = {
    products:[],
    paymentStatus:"Pending"
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addNewProduct:(state,action:PayloadAction<IQuantityProduct>)=>{
            let isExist = false;
            state.products?.forEach((product,index)=>{
                if (isEqual(product.product,action.payload.product)){
                    let quantity = state.products![index].quantity || 1;
                    state.products![index].quantity = quantity + (action.payload.quantity || 1);
                    isExist = true
                }
            });
            !isExist &&state.products?.push({quantity:action.payload.quantity,product:action.payload.product,id:uuidv4()});
        },
        removeProduct:(state,action:PayloadAction<IQuantityProduct>)=>{
            const newProducts = state.products?.filter(product => !isEqual(product.product,action.payload.product));
            state.products = newProducts;
        },
        increaseQuantityProduct:(state,action)=>{
            state.products?.forEach((product,index)=>{
                if(isEqual(product.product,action.payload)){
                    let quantity = state.products![index].quantity || 1;
                    state.products![index].quantity = quantity + 1;
                }
            })
        },
        decreaseQuantityProduct:(state,action)=>{
            state.products?.forEach((product,index)=>{
                if (isEqual(product.product,action.payload) && (product?.quantity || 0)> 1){
                    let quantity = state.products![index].quantity || 2;
                    state.products![index].quantity = quantity - 1;
                }
            });
        },
        payment:(state)=>{
            state.paymentStatus = "Paid";
        }
    }
});

export const {addNewProduct,increaseQuantityProduct,decreaseQuantityProduct,payment,removeProduct} = cartSlice.actions;

export const getProducts  = (state:RootState) => state.cart.products;
export const selectPaymentStatus = (state:RootState) => state.cart.paymentStatus;

export default cartSlice.reducer;