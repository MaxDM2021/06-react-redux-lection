import {  createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: "",
        isLoggedIn: false,
        a: 1,
        b: 2, 
        c: 3,
    },
    reducers: {
        logIn(state, action) {
            state.login = action.payload;
            state.isLoggedIn = true;
        },
      logOut(state) {
        state.login = "";
        state.isLoggedIn = false;
        },
    },
})


const persistConfig = {
    key: 'user',
    storage,
    // whitelist: ['login', 'a'],
    blacklist: ['c', 'b'],
  };
  
  export const clickReducer = persistReducer(persistConfig, userSlice.reducer);
  




export const { logIn, logOut } = userSlice.actions;



// ===== Selectors =====

export const getClicksValue = state => state.user.isLoggedIn;