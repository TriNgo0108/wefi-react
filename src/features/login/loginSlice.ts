import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { LoginAPI } from "./loginAPI";

interface LoginState {
    token?:string;
    isWaiting?:boolean;
    code?:number;
}
const initialState : LoginState = {
    token:"",
    code:0
};
export const LoginWithEmail = createAsyncThunk(
    "login/loginWithEmail",
    async()=>{
        const response = await LoginAPI();
        return response;
    }
)
export const loginSlice = createSlice({
    name:'login',
    initialState:initialState,
    reducers:{
        logOut: ()=>{
             // From here we can take action only at this "login" state
            // But, as we have taken care of this particular "logout" action
            // in rootReducer, we can use it to CLEAR the complete Redux Store's state
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginWithEmail.fulfilled,(state,{payload}:PayloadAction<LoginState>)=>{
            state.token = payload.token;
            state.code = payload.code;
            state.isWaiting = false;
        }).addCase(LoginWithEmail.pending,(state)=>{
            state.isWaiting = true
        })
        ;
    }
});
export const getToken = (state: RootState) => state.login.token;
export const getIsWaiting = (state:RootState) => state.login.isWaiting;
export const getCode = (state:RootState) => state.login.code;
export const {logOut} = loginSlice.actions;
export default loginSlice.reducer;