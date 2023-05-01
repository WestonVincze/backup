import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { freeCharacters } from "../data/freeCharacters";

interface UnlockedCharactersState {
  unlockedCharacters: string[];
}

// TODO: add a "weekly rotation" of unlocked characters
// initialState should "free characters" + users owned characters
const initialState: UnlockedCharactersState = {
  unlockedCharacters: freeCharacters
};

export const unlockedCharactersSlice = createSlice({
  name: "unlockedCharacters",
  initialState,
  reducers: {
    addUnlockedCharacter: (
      state: UnlockedCharactersState,
      action: PayloadAction<string>
    ) => {
      state.unlockedCharacters.push(action.payload);
    },
    removeUnlockedCharacter: (
      state: UnlockedCharactersState,
      action: PayloadAction<string>
    ) => {
      state.unlockedCharacters = state.unlockedCharacters.filter(
        (character) => character !== action.payload
      );
    },
    setUnlockedCharacters: (
      state: UnlockedCharactersState,
      action: PayloadAction<string[]>
    ) => {
      state.unlockedCharacters = action.payload;
    },
    resetUnlockedCharacters: (state: UnlockedCharactersState) => {
      state.unlockedCharacters = initialState.unlockedCharacters;
    }
  }
});

export const isCharacterUnlocked = (
  unlockedCharacters: string[],
  char: string
) => unlockedCharacters.includes(char.toLowerCase());

export const {
  addUnlockedCharacter,
  removeUnlockedCharacter,
  setUnlockedCharacters,
  resetUnlockedCharacters
} = unlockedCharactersSlice.actions;

export default unlockedCharactersSlice.reducer;
