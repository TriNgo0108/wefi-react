import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { LoginAPI } from "./loginAPI";

interface LoginState {
    token?:string;
    isWaiting?:boolean;
}
const initialState : LoginState = {
    token:""
};
export const LoginWithEmail = createAsyncThunk(
    "login/loginWithEmail",
    async()=>{
        const response = await LoginAPI();
        return response.data;
    }
)
export const loginSlice = createSlice({
    name:'login',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(LoginWithEmail.fulfilled,(state,action)=>{
            state.token = action.payload;
            state.isWaiting = false;
        }).addCase(LoginWithEmail.pending,(state)=>{
            state.isWaiting = true
        })
        ;
    }
});
export const getToken = (state: RootState) => state.login.token;
export default loginSlice.reducer;