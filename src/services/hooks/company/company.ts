import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { registerNewCompany, updateCompanyName } from "../../api/company";
import {
  setCompanyName,
  registerCompany,
  unRegisterCompany
} from "../../slices/companySlice";

const useCompany = () => {
  // const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const companyName = useSelector(
    (state: RootState) => state.company.companyName
  );

  const handleRegisterNewCompany = async (name: string) => {
    try {
      await registerNewCompany(name);
      dispatch(registerCompany());
      dispatch(setCompanyName(name));
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleUnRegisterCompany = () => {
    dispatch(unRegisterCompany());
  };

  const handleUpdateCompanyName = async (newCompanyName: string) => {
    try {
      await updateCompanyName(companyName, newCompanyName);
      dispatch(setCompanyName(newCompanyName));
      dispatch(registerCompany());
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    error,
    registerCompany: handleRegisterNewCompany,
    unRegisterCompany: handleUnRegisterCompany,
    updateCompanyName: handleUpdateCompanyName
  };
};

export default useCompany;

/*
  useEffect(() => {
    setLoading(true);
    const fetchCompany = async () => {
      try {
        const company = await getCompany(companyName);
        setCompany(company);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCompany();
  }, [companyName]);
  */
