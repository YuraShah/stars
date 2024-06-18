import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IHeaders, LINKS } from '../../types/types';

const headers: IHeaders = {
   "Content-Type": "text/json"
 };

export const signIn = createAsyncThunk(
   'sign/in',
   async (obj: string, thunkAPI) => {
      const response = await axios.post(LINKS.SIGNIN, obj, {headers: headers})
         .then((r) => {
            if(r.data[0] !== 'User is not found') {
               localStorage.setItem("token", JSON.stringify(r.data[0].token))
            }
            return r.data
         })
         .catch((err) => {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
         })
      return response
   }
)