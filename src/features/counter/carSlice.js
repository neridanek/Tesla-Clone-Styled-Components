import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars:["ModelS","Model3","ModelX","ModelY"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
    }
});

export const {

} = carSlice.actions
export const selectCars = state => state.car.cars
export default carSlice.reducer