import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
export const replaceCamelWithSpaces=(colorName)=>{
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <Button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </Button>
      <input
        aria-checked={isDisabled}
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(event) => {
          setIsDisabled(event.target.checked);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
