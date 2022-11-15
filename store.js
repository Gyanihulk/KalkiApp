import { configureStore, combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./features/BasketSlice";
import restaurantSlice from "./features/restaurantSlice";

export const store = configureStore({
  reducer: { basket: basketSlice, restaurant: restaurantSlice },  //basketSlice=BasketReducer
});
