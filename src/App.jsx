import { useState } from "react";

const App = () => {
  const [buttonMessage, setButtonMessage] = useState("Click me!");
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonClicked = () => {
    setButtonMessage("Great, you clicked me!");
    setIsDisabled(true);
  };
  return (
    <div>
      <h1>My App</h1>

      <button onClick={buttonClicked} disabled={isDisabled}>
        {buttonMessage}
      </button>
    </div>
  );
};

export default App;
