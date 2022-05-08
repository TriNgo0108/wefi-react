import { RootState } from "./store";

export const loadState = () =>{
    try{
        const serializedStated = localStorage.getItem('state');
        const cookies = document.cookie;
        let token = "";
        if (serializedStated === null){
             return undefined;
        }
        cookies.split(";").forEach((cookie,index)=>{
            cookie = cookie.trim();
            const[key,values] = cookie.split("=");
            if (key==="token") token = values;
        });
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
const haveTokenCookie  =():boolean=>{
    const cookies = document.cookie;
    cookies.split(";").forEach((cookie)=>{
        cookie = cookie.trim();
        const [key,values] = cookie.split("=");
        if (key === "token") return true;
    });
    return false;
}

export const saveState = (state:RootState) =>{
    try {
        const serializedStated = JSON.stringify({cart:state.cart});
        localStorage.setItem('state',serializedStated);
        let isToken = haveTokenCookie();
        if (!isToken){
            let expireDate = new Date();
            expireDate.setTime(expireDate.getTime()+ (2*60*60*1000));
            document.cookie = `token=${state.login.token};expires=${expireDate.toUTCString()};path=/`;
        }
    } catch (error) {
        
    }
}