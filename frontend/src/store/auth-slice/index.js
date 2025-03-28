import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
}

export const userRegister = createAsyncThunk('/auth/register', 

    async(formData) => {
        const response = await axios.post('http://localhost:4000/api/v1/auth/register', formData, {
            withCredentials: true
        });

        return response.data;
    }
);

export const userLogin = createAsyncThunk('/auth/login',
    
    async(formData) => {
        const response = await axios.post('http://localhost:4000/api/v1/auth/login', formData, {
            withCredentials: true
        });

        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: (state, action) => {}
    },
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state) => {
            state.isLoading = true
        })
        .addCase(userRegister.fulfilled, (state) => {
            state.isLoading = false,
            state.user = null,
            state.isAuthenticated = false
        })
        .addCase(userRegister.rejected, (state) => {
            state.isLoading = false,
            state.user = null,
            state.isAuthenticated = false
        })
        .addCase(userLogin.pending, (state) => {
            state.isLoading = true
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false,
            state.user = action.payload,
            state.isAuthenticated = true
        })
        .addCase(userLogin.rejected, (state) => {
            state.isLoading = false,
            state.user = null,
            state.isAuthenticated = false
        })
    }
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;