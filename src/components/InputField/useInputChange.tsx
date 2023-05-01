// NOT USED AT THIS TIME
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isCharacterUnlocked } from "../../slices/unlockedCharactersSlice";
import { RootState } from "../../store";

interface InputChangeHandler {
  (value: string): void;
}

interface UseInputChangeProps {
  isRestricted: boolean;
}
/* AI generated... doesn't make sense. Needs to be fixed */

const useInputChange = ({
  isRestricted
}: UseInputChangeProps): InputChangeHandler => {
  const unlockedCharacters = useSelector(
    (state: RootState) => state.unlockedCharacters.unlockedCharacters
  );

  const handleChange = (value: string) => {
    if (isRestricted) {
      const lastChar = value.charAt(value.length - 1);
      const regex = /^[a-z0-9!@#$%^&*()-_=+,.<>/?|`~]+$/i;

      if (
        !regex.test(lastChar) ||
        isCharacterUnlocked(unlockedCharacters, lastChar)
      ) {
        handleChange(value);
      } else {
        toast.error(`You don't own "${lastChar}".`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    } else {
      handleChange(value);
    }
  };
  return handleChange;
};

export default useInputChange;
