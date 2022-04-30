import { RootState } from "./store";

export const loadState = () =>{
    try{
        const serializedStated = localStorage.getItem('state');
        if (serializedStated === null){
             return undefined;
        }
        return JSON.parse(serializedStated);
    }catch(e){
        return undefined;
    }
}

export const saveState = (state:RootState) =>{
    try {
        const serializedStated = JSON.stringify({cart:state.cart});
        localStorage.setItem('state',serializedStated);
    } catch (error) {
        
    }
}