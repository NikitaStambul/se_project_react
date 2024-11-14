import { useContext } from "react";
import "./AddItemModal.css";
import itemsApi from "utils/itemsApi";
import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import RadioButton from "components/RadioButton/RadioButton";
import ClothesContext from "contexts/ClothesContext";
import classNames from "classnames";
import useFormValidation from "#/hooks/useFormValidation";

function AddItemModal({ onClose }) {
  const { setClothings } = useContext(ClothesContext);
  const { formData, errors, handleInputChange, handleBlur } = useFormValidation(
    { name: "", imageUrl: "", weather: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    itemsApi
      .addClothing(formData)
      .then((clothing) => {
        setClothings((clothings) => [clothing, ...clothings]);
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <ModalWithForm
      title="New garment"
      submitBtnText="Add garment"
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
          minLength="3"
        />
      </label>

      <label
        className={classNames("modal__label", {
          modal__label_error: errors.imageUrl,
        })}
        htmlFor="imageUrl"
      >
        Image{errors.imageUrl && <span>{` (${errors.imageUrl})`}</span>}
        <input
          className={classNames("modal__input", {
            modal__input_error: errors.imageUrl,
          })}
          type="url"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
      </label>

      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        {["hot", "warm", "cold"].map((weather) => (
          <label
            key={weather}
            className="modal__label modal__label_type_radio"
            htmlFor={weather}
          >
            <RadioButton
              name="weather"
              id={weather}
              value={weather}
              checked={formData.weather === weather}
              onChange={handleInputChange}
              required
            />
            {weather.charAt(0).toUpperCase() + weather.slice(1)}
          </label>
        ))}
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
