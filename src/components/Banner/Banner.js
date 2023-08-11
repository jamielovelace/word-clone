import React from 'react';

function Banner({result, answer, guessCount}) {
  const bannerTypeClass = result === 'win' ? 'happy' : 'sad'
  return (
    <div className={`${bannerTypeClass} banner`}>
      {result === 'win' ? (
        <p>
          <strong>Congratulations!</strong> Got it in 
          <strong>{guessCount} guesses</strong>.
        </p>
      ): (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
      
    </div>
  )
}

export default Banner;