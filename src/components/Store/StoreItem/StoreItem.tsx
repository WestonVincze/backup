import { useDispatch } from "react-redux";
import { addUnlockedCharacter } from "../../../services/slices/unlockedCharactersSlice";
import { itemType } from "../types";

const StoreItem = ({
  name,
  type,
  price,
  isPriceInDollars,
  discount,
  quantity,
  isUnlocked
}: StoreItemProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="itemName">{name}</div>
      <p>price: {isPriceInDollars ? `$${price}` : `${price} L Bucks`}</p>
      <p>discount: {discount}</p>
      <p>quantity: {quantity}</p>
      {isUnlocked ? (
        "unlocked."
      ) : (
        <button onClick={() => dispatch(addUnlockedCharacter(name))}>
          Buy Now
        </button>
      )}
    </div>
  );
};

interface StoreItemProps {
  name: string;
  type: itemType;
  price: number;
  isPriceInDollars: boolean;
  discount?: number;
  quantity?: number;
  isUnlocked: boolean;
}

export default StoreItem;
