import { RootState } from "./store";
import { Cookies } from "react-cookie";
export const loadState = () =>{
    try{
        const serializedStated = localStorage.getItem('state');
        console.log(serializedStated);
        const cookies = new Cookies();
        let token = cookies.get("token");
        if (serializedStated === null){
             return undefined;
        }
        
        if (token !==""){
            const preState = JSON.parse(serializedStated);
            preState.login = {token:token,code:200,isWaiting:false};
            return preState;
        }
        return JSON.parse(serializedStated);
    }catch(e){
        return undefined;
    }
}

export const saveState = (state:RootState) =>{
    try {
        const serializedStated = JSON.stringify({cart:state.cart});
        const cookies = new Cookies();
        localStorage.setItem('state',serializedStated);
        let isToken = cookies.get("token");
        if (!isToken && state.login.token){
            let expireDate = new Date();
            expireDate.setTime(expireDate.getTime()+ (2*60*60*1000));
            cookies.set("token",state.login.token,{expires:expireDate});
        }
        if (!state.login.token){
            cookies.remove("token",{path:"/"});
            localStorage.clear();
        }
    } catch (error) {
        
    }
}