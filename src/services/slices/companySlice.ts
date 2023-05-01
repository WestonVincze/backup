import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompanyState {
  isRegistered: boolean;
  companyName: string;
}

const initialState: CompanyState = {
  isRegistered: false,
  companyName: ""
};

const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanyName(state: CompanyState, action: PayloadAction<string>) {
      state.companyName = action.payload;
    },
    registerCompany(state: CompanyState) {
      state.isRegistered = true;
    },
    unRegisterCompany(state: CompanyState) {
      state.isRegistered = false;
    }
  }
});

export const {
  setCompanyName,
  registerCompany,
  unRegisterCompany
} = CompanySlice.actions;

export default CompanySlice.reducer;
