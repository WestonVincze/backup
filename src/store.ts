import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./services/slices/loginSlice";
import unlockedCharactersReducer from "./services/slices/unlockedCharactersSlice";
import companyReducer from "./services/slices/companySlice";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  login: loginReducer,
  unlockedCharacters: unlockedCharactersReducer,
  company: companyReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
