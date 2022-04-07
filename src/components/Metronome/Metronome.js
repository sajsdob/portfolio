import React, { useState, useEffect } from 'react';
import './Metronome.scss';
import click from './../../../src/assets/click.mp3'




function Metronome() {

    var audio = new Audio(click);



    const [timer, setTimer] = useState(0);
    const [myinterval, setMyinterval] = useState(60);









    function setInt (val) {
        setMyinterval(val)
    }

    let value = 10;

    function  stop () {
       value = 0;

    }



    function start () {
        value = 10;

        function intervalTimer(callback, interval = 500) {
            let counter = 1;
            let timeoutId;
            const startTime = Date.now();

            function main() {
                const nowTime = Date.now();
                const nextTime = startTime + counter * interval;
                timeoutId = setTimeout(main, interval - (nowTime - nextTime));

                audio.play();

                counter += 1;
                callback();
            }

            timeoutId = setTimeout(main, interval);

            return () => {
                clearTimeout(timeoutId);
            };
        }



        const cancelTimer = intervalTimer(() => {
            if (value > 0) {

            } else {
                cancelTimer();
            }
        }, 60000 / myinterval);



    }

    return (
        <div className='metronome'>
            <h1>METRONOME</h1>
            <div>

                <label htmlFor="volume">BPM</label>
                {myinterval}


                <br/>

                <div className='metronome-container'>
                    <input onChange={(e)=>setInt(e.target.value)} value={myinterval} step="1"  type="range" id="volume" name="volume" min="1" max="180"/>

                </div>


                <p>{timer}</p>

                <button onClick={start}>
                    START
                </button>

                <button onClick={stop}>
                    STOP
                </button>



            </div>

        </div>
    );
}

export default Metronome;
