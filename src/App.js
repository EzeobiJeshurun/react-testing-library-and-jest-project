import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <Button 
         style={{ backgroundColor: buttonColor }}
         onClick={()=> setButtonColor(newButtonColor)}
        >
        Change to {newButtonColor}
      </Button>
    </div>
  );
}

export default App;
