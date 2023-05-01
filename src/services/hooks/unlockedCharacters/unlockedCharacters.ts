import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  addUnlockedCharacter,
  getUnlockedCharacters
} from "../../api/unlockedCharacters";
import {
  addUnlockedCharacter as addUnlockedCharacterToStore,
  isCharacterUnlocked
} from "../../slices/unlockedCharactersSlice";

const useUnlockedCharacters = () => {
  const [error, setError] = useState<string>();
  const companyName = useSelector(
    (state: RootState) => state.company.companyName
  );
  const unlockedCharacters = useSelector(
    (state: RootState) => state.unlockedCharacters.unlockedCharacters
  );
  console.log(unlockedCharacters);
  const dispatch = useDispatch();

  const handleAddUnlockedCharacter = async (character: string) => {
    try {
      await addUnlockedCharacter(character, companyName);
      dispatch(addUnlockedCharacterToStore(character));
    } catch (error) {
      setError((error as Error).message);
    }
  };

  // this should only be done on a load to sync the store
  const handleGetUnlockedCharacters = async (): Promise<string[] | null> => {
    // any fetching should be done only with the redux store
    try {
      const characters: string[] = await getUnlockedCharacters(companyName);
      return characters;
    } catch (error) {
      setError((error as Error).message);
      return null;
    }
  };

  const handleIsCharacterUnlocked = (character: string): boolean => {
    return unlockedCharacters.includes(character.toLowerCase());
  };

  return {
    error,
    addCharacter: handleAddUnlockedCharacter,
    getUnlockedCharacters: handleGetUnlockedCharacters,
    isCharacterUnlocked: handleIsCharacterUnlocked
  };
};

export default useUnlockedCharacters;
