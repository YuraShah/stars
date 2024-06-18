import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerReducer from '../features/register/registerSlice';
import signinReducer, { getUser } from '../features/signin/signinSlice';
import catsReducer from '../features/cats/catsSlice';

export const store = configureStore({
  reducer: {
    registerStore: registerReducer,
    signinStore: signinReducer,
    catsStore: catsReducer,
  },
});

store.dispatch(getUser(null))
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
