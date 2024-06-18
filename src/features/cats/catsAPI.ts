import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IHeaders, LINKS } from '../../types/types';

const headers: IHeaders = {
   "Content-Type": "text/json"
};

export const addCat = createAsyncThunk(
   'add/cat',
   async (obj: string, thunkAPI) => {
      const response = await axios.post(LINKS.ADDCAT, obj, { headers: headers })
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

export const getViewCats = createAsyncThunk(
   'get/viewcats',
   async (obj: string, thunkAPI) => {
      const response = await axios.post(LINKS.VIEWCATS, obj, { headers: headers })
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
