import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './registerAPI';

interface IRegisterSlice {
   registerData: string[],
   registerPending: boolean,
   registerRej: boolean
}

const initialState: IRegisterSlice = {
   registerData: [],
   registerPending: false,
   registerRej: false,
}

const registerSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder
         .addCase(registerUser.pending, (state: IRegisterSlice, action) => {
            state.registerPending = true
            state.registerData = []
            state.registerRej = false
         })
         .addCase(registerUser.fulfilled, (state: IRegisterSlice, action) => {
            state.registerData = action.payload
            state.registerPending = false
            state.registerRej = false
         })
         .addCase(registerUser.rejected, (state: IRegisterSlice, action) => {
            state.registerPending = false
            state.registerData = []
            state.registerRej = true
         })
   }
})

export default registerSlice.reducer
export const {} = registerSlice.actions