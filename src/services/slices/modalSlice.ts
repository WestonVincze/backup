import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface ModalState {
  isOpen: boolean;
  content: ReactNode;
}

const initialState: ModalState = {
  isOpen: false,
  content: null
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open(state: ModalState) {
      state.isOpen = true;
    },
    close(state: ModalState) {
      state.isOpen = false;
    },
    setContent(state: ModalState, action: PayloadAction<ReactNode>) {
      state.content = action.payload;
    }
  }
});

export const { open, close, setContent } = ModalSlice.actions;

export default ModalSlice.reducer;
