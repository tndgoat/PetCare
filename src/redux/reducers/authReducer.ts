import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  refreshToken: string;
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  error: string;
}

const initialState: AuthState = {
  token: '',
  refreshToken: '',
  id: null,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },

    removeAuth: (state) => {
      state.authData = initialState;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth } = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.authData;
