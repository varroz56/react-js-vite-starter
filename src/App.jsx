import { useState } from "react";

const App = () => {
  const [buttonMessage, setButtonMessage] = useState("Click me!");
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonClicked = () => {
    setButtonMessage("Great, you clicked me!");
    setIsDisabled(true);
  };
  return (
    <div className="container text-center w-50 mt-52">
      <h1 className="text-4xl">My App</h1>

      <button
        className="btn btn-blue border-2 bg-slate-500 text-yellow-100 p-5 m-2 disabled:bg-red-500"
        onClick={buttonClicked}
        disabled={isDisabled}
      >
        {buttonMessage}
      </button>
    </div>
  );
};

export default App;
