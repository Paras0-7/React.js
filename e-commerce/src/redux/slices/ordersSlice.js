import {createSlice} from '@reduxjs/toolkit';

const ordersSlice = createSlice({
    name:'order',
    initialState:{ orders:[]},
    reducers:{
        addOrders(state,action){
            state.orders= [...state.orders,...action.payload];
            
        }

       
    }
})

export const ordersReducers = ordersSlice.reducer;
export const ordersAction = ordersSlice.actions;