import "./LogInModal.css";
import classNames from "classnames";
import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import authApi from "#/utils/authApi";
import { useContext } from "react";
import CurrentUserContext from "#/contexts/CurrentUserContext";
import useFormValidation from "#/hooks/useFormValidation";

function LogInModal({ onClose }) {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    { email: "", password: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    authApi
      .signIn(formData)
      .then(() => {
        authApi.getMyInfo().then((user) => {
          setCurrentUser(user);
        });
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <ModalWithForm
      title="Sign Up"
      submitBtnText="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label
        className={classNames("modal__label", {
          modal__label_error: errors.email,
        })}
        htmlFor="email"
      >
        Email{errors.email && <span>{` (${errors.email})`}</span>}
        <input
          className={classNames("modal__input", {
            modal__input_error: errors.email,
          })}
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
      </label>
      <label
        className={classNames("modal__label", {
          modal__label_error: errors.password,
        })}
        htmlFor="password"
      >
        Password{errors.password && <span>{` (${errors.password})`}</span>}
        <input
          className={classNames("modal__input", {
            modal__input_error: errors.password,
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleBlur}
          minLength={6}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LogInModal;
