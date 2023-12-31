import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: true,
    reducers: {
        toggle: (state) => !state ,
        hidePreview : (state) => state = false
    }
})

export const { toggle , hidePreview } = toggleSlice.actions

export default toggleSlice.reducer