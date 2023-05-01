import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { signupUser, loginUser } from "../../api/users";
import { loginSuccess, logoutSuccess } from "../../slices/loginSlice";
import { User } from "../../types";

const useUsers = () => {
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const companyName = useSelector(
    (state: RootState) => state.company.companyName
  );

  const handleSignup = async (user: User) => {
    try {
      await signupUser(user, companyName);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleLogin = async (user: User) => {
    try {
      await loginUser(user, companyName);
      dispatch(loginSuccess(user.username));
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleLogout = async (username: string) => {
    dispatch(logoutSuccess(username));
  };

  return {
    error,
    signup: handleSignup,
    login: handleLogin,
    logout: handleLogout
  };
};

export default useUsers;
