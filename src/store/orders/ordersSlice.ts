import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import { TLoading, TProduct, isString } from "@types";

interface IOrdersState {
  orders: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrdersState = {
  orders: [],
  loading: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.error = null;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actPlaceOrder };
export const { resetOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
