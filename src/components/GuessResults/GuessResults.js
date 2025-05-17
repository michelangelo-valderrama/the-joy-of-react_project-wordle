import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess value={checkGuess(guess.value, answer)} key={guess.id} />
      ))}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} />
      ))}
    </div>
  );
}

export default GuessResults;
