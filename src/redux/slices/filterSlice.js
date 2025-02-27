import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category_id: "",
  city_id: "",
  user_id: "",
  adult_number: "",
  children_number: "",
  baby_number: "",
  with_pits: "",
  area_id: "",
  from_date: "",
  to_date: "",
  price_from: "",
  price_to: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
