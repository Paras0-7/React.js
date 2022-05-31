import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      const existingIem = state.items.find(function (item) {
        return item.itemId === newItem.id;
      });

      if (existingIem) {
        existingIem.quantity++;
        existingIem.totalPrice = existingIem.totalPrice + newItem.price;
      } else {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
    },

    removeItem(state, action) {
      const id = action.payload;

      state.totalQuantity--;
      const existingIem = state.items.find(function (item) {
        return item.itemId === id;
      });

      if (existingIem.quantity === 1) {
        state.items = state.items.filter(function (item) {
          return item.itemId !== id;
        });
      } else {
        existingIem.quantity--;
        existingIem.totalPrice = existingIem.totalPrice - existingIem.price;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
