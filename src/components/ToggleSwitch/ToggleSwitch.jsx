import cn from "classnames";
import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "contexts/CurrentTemperatureUnitContext";

function ToggleSwitch({ className }) {
  const { currentTemperatureUnit, setCurrentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const handleCheck = () => {
    setCurrentTemperatureUnit((unit) => (unit == "C" ? "F" : "C"));
  };

  return (
    <label className={cn("toggle-switch", { [className]: className })}>
      <input
        type="checkbox"
        checked={currentTemperatureUnit == "C"}
        onChange={handleCheck}
      />
      <div className="toggle-switch__labels-dark">
        <div className="toggle-switch__letter">F</div>
        <div className="toggle-switch__letter">C</div>
      </div>
      <div className="toggle-switch__labels-light">
        <div className="toggle-switch__letter">F</div>
        <div className="toggle-switch__letter">C</div>
      </div>
    </label>
  );
}

export default ToggleSwitch;
