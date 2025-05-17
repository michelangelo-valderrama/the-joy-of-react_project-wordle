import React from "react";

import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const isSuccess = answer === guessResults.at(-1)?.value;
  const isEnded = isSuccess || guessResults.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guesses={guessResults} answer={answer} />
      <GuessInput
        disabled={isEnded}
        onEnterGuess={(guess) =>
          setGuessResults([
            ...guessResults,
            {
              id: crypto.randomUUID(),
              value: guess,
            },
          ])
        }
      />

      {isSuccess && (
        <Banner variant="success">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessResults.length} guesses</strong>.
          </p>
        </Banner>
      )}
      {isEnded && !isSuccess && (
        <Banner variant="danger">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
