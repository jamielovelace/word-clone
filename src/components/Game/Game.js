import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessList from '../GuessList'
import Guesser from '../Guesser'
import Banner from '../Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('')
  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);
    if (guess === answer) setGameResult('win')
    if (guesses.length === 5 && guess !== answer) setGameResult('lose')
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {gameResult === '' ? (
        <Guesser handleGuessSubmit={handleGuessSubmit}/>
      ): (
        <Banner result={gameResult} guessCount={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
