import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    index : 0
}

export const updateIndexSlice = createSlice({
    name : 'updateIndex',
    initialState,
    reducers : {
        updateIndex : (state , action)=>{
            state.index = action.payload
        }
    }
})

export const { updateIndex } = updateIndexSlice.actions

export default updateIndexSlice.reducer