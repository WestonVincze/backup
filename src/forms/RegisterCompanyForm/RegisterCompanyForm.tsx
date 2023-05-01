import { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useCompany from "../../services/hooks/company/company";

const RegisterCompany = () => {
  const { companyName, isRegistered } = useSelector(
    (state: RootState) => state.company
  );
  const [company, setCompany] = useState(companyName);
  const { registerCompany, updateCompanyName, error } = useCompany();

  useEffect(() => {
    if (error) {
      console.log("companyForm error " + error);
    }
  }, [error]);

  const onRegister = () => {
    if (!isRegistered) registerCompany(company);
    updateCompanyName(company);
  };

  return (
    <>
      <InputField
        label="Enter company name:"
        value={company}
        fieldType="text"
        handleChange={setCompany}
      />
      <button onClick={onRegister}>Register</button>
    </>
  );
};

export default RegisterCompany;
