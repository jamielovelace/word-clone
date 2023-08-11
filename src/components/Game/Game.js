import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guesser from '../Guesser'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  function handleGuessSubmit(event) {
    event.preventDefault()
    if(guess === "") return
    console.log({guess})
    setGuess("")
  }

  return (
    <Guesser guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessSubmit}/>
  );
}

export default Game;
