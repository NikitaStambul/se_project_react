import { useContext } from "react";
import "./AddItemModal.css";
import api from "utils/api";
import ModalWithForm from "components/ModalWithForm";
import RadioButton from "./RadioButton";
import ClothesContext from "context/ClothesContext";

function AddItemModal({ onClose }) {
  const { setClothings } = useContext(ClothesContext);

  const handleAddingNewItem = (data) => {
    api
      .addClothing(data)
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
      onSubmit={handleAddingNewItem}
    >
      <label className="modal__label" htmlFor="name">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image
        <input
          className="modal__input"
          type="url"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          <RadioButton name="weather" id="hot" value="hot" required />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          <RadioButton name="weather" id="warm" value="warm" />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          <RadioButton name="weather" id="cold" value="cold" />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
