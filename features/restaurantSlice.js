import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:{
    id:null,
      imgUrl:null,
      title:null,
      rating:null,
      genre:null,
      address:null,
      shortDescription:null,
      dishes:null,
      long:null,
      lat:null,
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setResturant:(state,action)=>{
      state.restaurant=action.payload;
    },
  },
});

export const {setResturant}=restaurantSlice.actions;

export const selectRestaurant =(state)=>state.restaurant.restaurant
export default restaurantSlice.reducer;