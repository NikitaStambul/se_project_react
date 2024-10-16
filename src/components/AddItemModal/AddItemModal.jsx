import { useContext, useState } from "react";
import "./AddItemModal.css";
import api from "utils/api";
import ModalWithForm from "components/ModalWithForm/ModalWithForm";
import RadioButton from "components/RadioButton/RadioButton";
import ClothesContext from "contexts/ClothesContext";
import classNames from "classnames";

function AddItemModal({ onClose }) {
  const { setClothings } = useContext(ClothesContext);

  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (field) => {
    if (!field.validity.valid) {
      setErrors((prev) => ({
        ...prev,
        [field.name]: field.validationMessage,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field.name]: "" }));
    }
  };

  const handleBlur = (e) => validateField(e.target);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .addClothing(formData)
      .then((clothing) => {
        setClothings((clothings) => [...clothings, clothing]);
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
