import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessList from '../GuessList'
import Guesser from '../Guesser'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Guesser handleGuessSubmit={handleGuessSubmit}/>
    </>
  );
}

export default Game;
