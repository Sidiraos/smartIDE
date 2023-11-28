import { createSlice } from '@reduxjs/toolkit';

const navBarToggleSlice = createSlice({
    name: 'toggle',
    initialState: false,
    reducers: {
        navBarToggle: (state) => !state ,
    }
})

export const { navBarToggle } = navBarToggleSlice.actions

export default navBarToggleSlice.reducer