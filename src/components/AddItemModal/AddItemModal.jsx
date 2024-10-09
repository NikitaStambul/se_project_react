import ModalWithForm from "components/ModalWithForm";
import "./AddItemModal.css";
import RadioButton from "./RadioButton/RadioButton";

function AddItemModal({ onClose }) {
  const handleAddingNewItem = (data) => {
    console.log(data);
  };

  return (
    <ModalWithForm
      title="New garment"
      submitBtnText="Add garment"
      onClose={onClose}
      onSubmit={handleAddingNewItem}
    >
      <label className="modal__label" htmlFor="name">
        Name:{" "}
        <input
          className="modal__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label" htmlFor="link">
        Image:{" "}
        <input
          className="modal__input"
          type="url"
          name="link"
          id="link"
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          <RadioButton name="type" id="hot" value="hot" required />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          <RadioButton name="type" id="warm" value="warm" />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          <RadioButton name="type" id="cold" value="cold" />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
