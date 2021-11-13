import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

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
        onChange={(event) => {
          setIsDisabled(event.target.checked);
        }}
      />
    </div>
  );
}

export default App;
