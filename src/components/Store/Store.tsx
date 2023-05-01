import { alphaCharacters } from "../../services/data/characters";
import StoreItem from "./StoreItem/StoreItem";
import { itemType } from "./types";
import { isCharacterUnlocked } from "../../services/slices/unlockedCharactersSlice";
import useUnlockedCharacters from "../../services/hooks/unlockedCharacters";

const Store = () => {
  const inventory = alphaCharacters;
  const { getUnlockedCharacters } = useUnlockedCharacters();

  // get inventory
  // get player unlocks
  return (
    <>
      <div className="storeItemContainer">
        {inventory.map((c, i) => (
          <StoreItem
            key={i}
            name={c}
            type={itemType.Character}
            price={100}
            isPriceInDollars={false}
            discount={0}
            quantity={1}
            isUnlocked={isCharacterUnlocked(unlockedCharacters, c)}
          />
        ))}
      </div>
    </>
  );
};

// Featured Items

// All Characters

// LBucks Packages

// Skins

// Keys

export default Store;
