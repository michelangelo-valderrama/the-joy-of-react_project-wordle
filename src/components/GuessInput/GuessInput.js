import React from "react";

function GuessInput({ onEnterGuess, disabled }) {
  const [guessValue, setGuessValue] = React.useState("");

  const onGuessInputChange = (e) => {
    setGuessValue(e.currentTarget.value.toUpperCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ answer: guessValue });
    onEnterGuess(guessValue);
    setGuessValue("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={guessValue}
        onChange={onGuessInputChange}
        pattern="\w{5,5}"
      />
    </form>
  );
}

export default GuessInput;
