import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  filterbysearch: "",
  sort: ""
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: { value: initialStateValue },
  reducers: {
    sortbyprice: (state, action) => {
      console.log(action.payload);
      state.value.sort = action.payload.sort;
    },

    filterbystock: (state) => {
      state.value.byStock = !state.value.byStock;
    },

    byFastDelivery: (state) => {
      state.value.byFastDelivery = !state.value.byFastDelivery;
    },

    filterbysearch: (state, action) => {
      state.value.filterbysearch = action.payload.payload;
    }
  }
});

export const {
  sortbyprice,
  filterbystock,
  byFastDelivery,
  filterbysearch
} = filterSlice.actions;

export default filterSlice.reducer;
