import "./RegisterModal.css";
import classNames from "classnames";
import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import authApi from "#/utils/authApi";
import useFormValidation from "#/hooks/useFormValidation";

function RegisterModal({ onClose }) {
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    {
      name: "",
      avatar: "",
      email: "",
      password: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    authApi
      .signUp(formData)
      .then(() => {
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
      altBtnEl={<button className="modal__login-option-btn">or Log In</button>}
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
      <label
        className={classNames("modal__label", {
          modal__label_error: errors.name,
        })}
        htmlFor="name"
      >
        Name{errors.name && <span>{` (${errors.name})`}</span>}
        <input
          className={classNames("modal__input", {
            modal__input_error: errors.name,
          })}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
      </label>

      <label
        className={classNames("modal__label", {
          modal__label_error: errors.avatar,
        })}
        htmlFor="avatarUrl"
      >
        Image{errors.avatar && <span>{` (${errors.avatar})`}</span>}
        <input
          className={classNames("modal__input", {
            modal__input_error: errors.avatar,
          })}
          type="url"
          name="avatar"
          id="avatarUrl"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
