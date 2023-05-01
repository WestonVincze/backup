import React, { useEffect, useState } from "react";
import RestrictedInputField from "../../components/RestrictedInputField";
import { toast } from "react-toastify";
import useUsers from "../../services/hooks/users";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useUsers();

  useEffect(() => {
    if (error !== null)
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
  }, [error]);

  // TODO: add useEffect that subscribes to "loggedIn" and update "loggedInUsers" with new user

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({ username, password });
  }

  return (
    <div className="LoginPage">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <RestrictedInputField
          label="username"
          fieldType="text"
          value={username}
          handleChange={setUsername}
        />
        <RestrictedInputField
          label="password"
          fieldType="password"
          value={password}
          handleChange={setPassword}
        />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default LoginForm;
