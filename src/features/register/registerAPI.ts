import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IHeaders, LINKS } from '../../types/types';

const headers: IHeaders = {
   "Content-Type": "text/json"
};

export const registerUser = createAsyncThunk(
   'register/user',
   async (obj: string, thunkAPI) => {
      const response = await axios.post(LINKS.REGISTER, obj, { headers: headers })
         .then((r) => {
            return r.data
         })
         .catch((err) => {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
         })
      return response
   }
)
