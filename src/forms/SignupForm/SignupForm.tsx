import { useEffect, useState } from "react";
import RestrictedInputField from "../../components/RestrictedInputField";
import useUsers from "../../services/hooks/users";
import { toast } from "react-toastify";

function passwordMatch(password1: string, password2: string): boolean {
  return !!password1 && !!password2 && password1 === password2;
}

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const { error, signup } = useUsers();

  useEffect(() => {
    if (error) {
      toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }, [error]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (passwordMatch(password1, password2)) {
      await signup({ username, password: password1 });
    }
  }
  return (
    <div className="LoginPage">
      <h1>SIGN UP PAGE</h1>
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
          value={password1}
          handleChange={setPassword1}
        />
        <RestrictedInputField
          label="password"
          fieldType="password"
          value={password2}
          handleChange={setPassword2}
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignupPage;
