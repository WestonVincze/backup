import "./styles.css";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import RegisterCompanyForm from "./forms/RegisterCompanyForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import Store from "./components/Store/Store";
import { open, setContent } from "./services/slices/modalSlice";
import useCompany from "./services/hooks/company";
import Modal from "./components/Modal";
import useModal from "./services/hooks/modal/modal";

export default function App() {
  const dispatch = useDispatch();
  const { companyName, isRegistered } = useSelector(
    (state: RootState) => state.company
  );
  const { unRegisterCompany } = useCompany();
  const { isOpen, content, openModal, closeModal } = useModal();

  const openStore = () => {
    openModal(<Store />);
    /*
    dispatch(setContent(<Store />));
    dispatch(open());
    */
  };

  // enter company name
  // signup new user
  // login with user

  return (
    <div className="App">
      <Modal isOpen={isOpen} content={content} handleClose={closeModal} />
      <button onClick={openStore}>Open Store</button>
      {isRegistered ? (
        <>
          <h1 onClick={() => unRegisterCompany()}>{companyName}</h1>
          <SignupForm />
          <LoginForm />
        </>
      ) : (
        <RegisterCompanyForm />
      )}
    </div>
  );
}
