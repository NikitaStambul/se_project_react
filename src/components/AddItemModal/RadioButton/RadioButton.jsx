import "./RadioButton.css";

function RadioButton(props) {
  return (
    <>
      <input className="modal__radio-input" type="radio" {...props} />
      <svg
        fill="none"
        height={16}
        width={16}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="radio-svg-outer" cx="8" cy="8" r="7.5" />
        <circle className="radio-svg-inner" cx="8" cy="8" r="5" />
      </svg>
    </>
  );
}

export default RadioButton;
