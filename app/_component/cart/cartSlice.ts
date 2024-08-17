import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface Product {
  id: number;
  title: string;
  price: number;
}
export interface CartState {
  producs: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  producs: [],
  totalPrice: 0,
};
const calculateTotal = (state: CartState) => {
  let total: number = 0;
  state.producs.forEach((product) => {
    total += product.price;
  });
  state.totalPrice = total;
};
export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      // I wanna not add new product if it already exists
      if (state.producs.some((product) => product.id === action.payload.id)) {
        return;
      }
      state.producs.push(action.payload);
      calculateTotal(state);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.producs = state.producs.filter(
        (product) => product.id !== action.payload
      );
      calculateTotal(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
