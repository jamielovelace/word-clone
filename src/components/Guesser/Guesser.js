import React from 'react';

function Guesser({guess, setGuess, handleGuessSubmit}) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" value={guess} onChange={(event) => {setGuess(event.target.value.toUpperCase())}}/>
    </form>
  );
}

export default Guesser;
