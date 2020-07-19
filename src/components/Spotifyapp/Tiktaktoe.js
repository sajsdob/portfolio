import React, { useState } from 'react';
import './Tiktaktoe.scss';
import click from '../../assets/click.mp3';


const Tiktaktoe = () => {

  const [buttons, setButtons] = useState([null, null, null, null, null, null, null, null, null]);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const move = (e) => {
    window.navigator.vibrate(30);

    if (e.target.innerHTML !== 'X' && e.target.innerHTML !== '0') { 
      let updatedButtons = buttons;
      updatedButtons[e.target.id] = player;
      setButtons(updatedButtons);
      if (player === 'X') {
        setPlayer('0')
      }
      else {
        setPlayer('X')
      }

      const newButtons = [];
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] !== 'X' && buttons[i] !== '0') {
          newButtons.push(i);
        }
      }
      // const nextMove = newButtons[Math.floor(Math.random() * newButtons.length)];
      // if(newButtons.length > 0) {
      //   updatedButtons[nextMove] = player;
      // }
      if (buttons[0] === 'X' && buttons[1] === 'X' && buttons[2] === 'X' ||
        buttons[3] === 'X' && buttons[4] === 'X' && buttons[5] === 'X' ||
        buttons[6] === 'X' && buttons[7] === 'X' && buttons[8] === 'X' ||
        buttons[0] === 'X' && buttons[3] === 'X' && buttons[6] === 'X' ||
        buttons[1] === 'X' && buttons[4] === 'X' && buttons[7] === 'X' ||
        buttons[2] === 'X' && buttons[5] === 'X' && buttons[8] === 'X' ||
        buttons[0] === 'X' && buttons[4] === 'X' && buttons[8] === 'X' ||
        buttons[2] === 'X' && buttons[4] === 'X' && buttons[6] === 'X') {
        setWinner('X')
      }
      else if (buttons[0] === '0' && buttons[1] === '0' && buttons[2] === '0' ||
        buttons[3] === '0' && buttons[4] === '0' && buttons[5] === '0' ||
        buttons[6] === '0' && buttons[7] === '0' && buttons[8] === '0' ||
        buttons[0] === '0' && buttons[3] === '0' && buttons[6] === '0' ||
        buttons[1] === '0' && buttons[4] === '0' && buttons[7] === '0' ||
        buttons[2] === '0' && buttons[5] === '0' && buttons[8] === '0' ||
        buttons[0] === '0' && buttons[4] === '0' && buttons[8] === '0' ||
        buttons[2] === '0' && buttons[4] === '0' && buttons[6] === '0') {
        setWinner('0')
      }
    }
  }

  const restart = () => {
    const resButtons = Array(9).fill(null);
    setButtons(resButtons);
    setPlayer('X')
    setWinner(null)
  }



  return (
    <div className='tiktaktoe'>
      {/* <h1> SPOTIFY APP <br /> IN <br /> DEVELOPMENT</h1>
      <img alt='construction' className='construction' src={construction} /> */}
      <h1>TIC TAC TOE!</h1>
      <button onClick={restart} className='restart'>RESTART</button>
      <div className='board'>
        {buttons.map((button, index) => <button onClick={(e) => move(e)} key={index} id={index}>{button}</button>)}
        {winner ? <div className='winner'> CONGRATS {winner} <br /> YOU WON!</div> : ''}
      </div>
    </div>
  )
}

export default Tiktaktoe

