import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './signinAPI';
import { jwtDecode } from 'jwt-decode';
import "core-js/stable/atob";
import { IUser } from '../../types/types';

interface ISigninSlice {
   signinPend: boolean,
   signinRej: boolean,
   signinErr: string,
   user: IUser | null;
   uId: [] | string[],
   token: any,
   signoutMessage: string | null,
}

const initialState: ISigninSlice = {
   signinPend: false,
   signinRej: false,
   signinErr: '',
   user: null,
   token: localStorage.getItem("token"),
   signoutMessage: null,
   uId: []
}


const signinSlice = createSlice({
   name: 'signin',
   initialState,
   reducers: {
      logoutUser: (state) => {
         localStorage.removeItem("token");
         return {
            ...state,
            user: null,
            token: null,
            signoutMessage: "Logged out of your account",
         }
      },
      getUser: (state, action) => {
         const token = state.token
         if (token) {
            try {
               let userDec: any = jwtDecode(token);
               return {
                  ...state,
                  user: userDec.data,
                  token,
                  signoutMessage: null,
               }
            } catch (err: any) {
               console.log(err.message)
            }
         }

      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(signIn.pending, (state: ISigninSlice, action) => {
            state.signinPend = true
            state.signinRej = false
            state.signinErr = ''
         })
         .addCase(signIn.fulfilled, (state: ISigninSlice, action) => {
            if (action.payload[0].token) {
               try {
                  const userL: any = jwtDecode(action.payload[0].token);
                  state.token = action.payload[0].token
                  state.user = userL.data
               } catch (err: any) {
                  console.log(err.message)
               }
            } else {
               state.signinErr = 'User is not found'
            }
            state.signinPend = false
            state.signinRej = false
         })
         .addCase(signIn.rejected, (state: ISigninSlice, action) => {
            state.signinPend = false
            state.signinRej = true
            state.signinErr = ''
         })
   }
})

export default signinSlice.reducer
export const { getUser, logoutUser } = signinSlice.actions