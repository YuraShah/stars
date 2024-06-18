import { createSlice } from '@reduxjs/toolkit';
import { IViewCats } from '../../types/types';
import { getViewCats } from './catsAPI';


interface ICatsSlice {
   catData: IViewCats[],
   catPending: boolean,
   catRej: boolean,
   catResp: boolean
}

const initialState: ICatsSlice = {
   catData: [],
   catPending: false,
   catRej: false,
   catResp: false
}

const catsSlice = createSlice({
   name: 'cats',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder
         .addCase(getViewCats.pending, (state, action) => {
            state.catData = []
            state.catPending = true
            state.catRej = false
            state.catResp = false
         })
         .addCase(getViewCats.fulfilled, (state, action) => {
            state.catData = action.payload
            state.catPending = false
            state.catRej = false
            state.catResp = true
         })
         .addCase(getViewCats.rejected, (state, action) => {
            state.catData = []
            state.catPending = false
            state.catRej = true
            state.catResp = false
         })
   }
})

export default catsSlice.reducer
export const {} = catsSlice.actions