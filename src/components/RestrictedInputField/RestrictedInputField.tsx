import { useSelector } from "react-redux";
import { isCharacterUnlocked } from "../../services/slices/unlockedCharactersSlice";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import InputField from "../InputField/InputField";

const RestrictedInputField: React.FC<RestrictedInputFieldProps> = ({
  label,
  fieldType,
  value,
  handleChange
}) => {
  // TODO: update fieldType to use a proper Type
  const unlockedCharacters = useSelector(
    (state: RootState) => state.unlockedCharacters.unlockedCharacters
  );

  function handleInputChange(value: string) {
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
  }

  return (
    <InputField
      label={label}
      fieldType={fieldType}
      value={value}
      handleChange={handleInputChange}
    />
  );
};

interface RestrictedInputFieldProps {
  label: string;
  fieldType: string;
  value: string;
  handleChange(value: string): void;
}

export default RestrictedInputField;
