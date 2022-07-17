import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed : false
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existing) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }else {
        existing.quantity++;
        existing.totalPrice = existing.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id)
        state.totalQuantity--;

        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id); // lo rimuovo filtrando state per id
        }else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
