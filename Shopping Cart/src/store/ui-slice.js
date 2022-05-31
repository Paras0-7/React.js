import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiReducer = uiSlice.reducer;

export const uiActions = uiSlice.actions;
