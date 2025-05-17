import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  let cells = <></>;

  if (value) {
    cells = value.map(({ letter, status }, index) => (
      <span className={`cell ${status}`} key={index}>
        {letter}
      </span>
    ));
  } else {
    cells = range(0, 5).map((i) => <span className="cell" key={i}></span>);
  }

  return <p className="guess">{cells}</p>;
}

export default Guess;
