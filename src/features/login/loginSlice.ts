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
        signOut:(state)=>{
            state.token = "";
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
export default loginSlice.reducer;