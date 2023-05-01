import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  loggedInUsers: string[];
}

const initialState: loginState = {
  loggedInUsers: []
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state: loginState, action: PayloadAction<string>) => {
      state.loggedInUsers.push(action.payload);
    },
    logoutSuccess: (state: loginState, action: PayloadAction<string>) => {
      state.loggedInUsers = state.loggedInUsers.filter(
        (l) => l !== action.payload
      );
    }
  }
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
