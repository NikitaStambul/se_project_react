import CurrentUserContext from "#/contexts/CurrentUserContext";
import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import classNames from "classnames";
import authApi from "#/utils/authApi";
import useFormValidation from "#/hooks/useFormValidation";

function EditProfileModal({ onClose }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    {
      name: currentUser.name ?? "",
      avatar: currentUser.avatar ?? "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    authApi
      .editProfile(formData)
      .then((newUser) => {
        onClose();
        setCurrentUser(newUser);
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

export default EditProfileModal;
