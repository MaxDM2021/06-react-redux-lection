import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { userSlice } from './userSlice';

// import { myValueSlice } from  './myValue/slice';
// import { itemsSlice } from  './items/slice';

// action:
// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString());

// const myReducer = createReducer(100, {
// [increment]: (state, action) => state + action.payload,
// [decrement]: (state, action) => state - action.payload,

// })

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');


// // IMMER:

// const itemsReducer = createReducer([], {
//     [add]: (state, action) => state.push(action.payload),
//     [remove]: (state, action) => state.filter(item => item.id !==action.payload),
// });



export const store = configureStore({
    reducer: {
        // myValue: myValueSlice.reducer,
        // items: itemsSlice.reducer,
        user: userSlice.reducer,
    },
middleware: getGetDefaultMiddleware => [...getGetDefaultMiddleware(), logger],

});