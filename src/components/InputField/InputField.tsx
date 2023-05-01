const InputField: React.FC<InputFieldProps> = ({
  label,
  fieldType,
  value,
  handleChange
}) => {
  return (
    <div className="field-row">
      <div className="label">{label}</div>
      <div className="field">
        <input
          type={fieldType}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  fieldType: string;
  value: string;
  handleChange(value: string): void;
}

export default InputField;
