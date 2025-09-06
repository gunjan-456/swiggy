import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    id: null,
    data: []
  },
  reducers: {
    addItem: (state, action) => {
      const { info, resId } = action.payload;

      if (!state.id) {
        state.id = resId;
      }

      if (state.id !== resId) {
        toast.error("Cannot add items from different stores");
        return;
      }

      const existingItem = state.data.find(item => item.id === info.id);

      if (!existingItem) {
        state.data.push({ ...info, quantity: 1 });
        toast.success(`${info.name} added to the cart`);
      } else {
        existingItem.quantity += 1;
        toast.success(`${info.name} quantity increased`);
      }
    },

    removeItem: (state, action) => {
      const { id } = action.payload;

      if (!state.data.length) {
        toast.error("Cart is already empty");
        return;
      }

      const itemIndex = state.data.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        if (state.data[itemIndex].quantity > 1) {
          state.data[itemIndex].quantity -= 1;
        } else {
          state.data.splice(itemIndex, 1);
        }
      }
    },

    clearCart: (state) => {
      state.data = [];
      state.id = null;
      toast.success("Cart cleared");
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
