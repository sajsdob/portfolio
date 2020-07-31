import React, { useState, useEffect } from 'react';
import './Memorygame.scss';



function Memorygame() {

    const [emojis, setEmojis] = useState([
        {
            emoji: '\uD83E\uDD81',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC3C',
            class: 'card'
        },
        {
            emoji: '\uD83E\uDD96',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC37',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC14',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC1D',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC1E',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC2C',
            class: 'card'
        },
        {
            emoji: '\uD83E\uDD81',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC3C',
            class: 'card'
        },
        {
            emoji: '\uD83E\uDD96',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC37',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC14',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC1D',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC1E',
            class: 'card'
        },
        {
            emoji: '\uD83D\uDC2C',
            class: 'card'
        },
    ]);

    const [openedCount, setOpenedCount] = useState(0);
    const [toCompare, setToCompare] = useState([]);
    const [currentOpened, setcurrentOpened] = useState([]);
    const [started, setStarted] = useState(false);
    const [steps, setSteps] = useState(0);
    const [unclickable, setUnclickable] = useState([]);

    const shuffle = () => {
            setUnclickable([])
            setSteps(0);
            let updated = emojis;
            updated.forEach(a => a.class = 'card');
            setEmojis(updated);
            setOpenedCount(0)
            setToCompare([]) 
            setcurrentOpened([]);
        if (started) {
            setStarted(true);
        }
        else {
            setStarted(false)
        }
        emojis.sort(() => Math.random() - 0.5);
    }

    const reveal = (index) => {
        
 
        if (openedCount < 2 && !currentOpened.includes(index) && !unclickable.includes(index)) {
            //set Unclickables
            var unclickableDup = unclickable;
            unclickable.push(index);
            setUnclickable(unclickableDup)

            //countring steps
            var stepsDup = steps;
            stepsDup += 0.5
            setSteps(stepsDup)

            //currently Opened Pairs(indexes)
            setcurrentOpened(prev => [...prev, index])

            //comparing Images
            var toCompareDup = toCompare;
            toCompareDup.push(emojis[index].emoji);
            setToCompare(toCompareDup)

            //flipping Cards
            var updated = emojis;
            updated[index].class = 'reveal'

            //How many cards are open
            setOpenedCount(openedCount + 1);
        }
    }

    useEffect(() => {
        if (openedCount === 2 && toCompare[0] !== toCompare[1]) {

            setTimeout(() => {
                let deletedDups = unclickable;
                deletedDups.splice(deletedDups.length - 2, 2);
                setUnclickable(deletedDups)
                setOpenedCount(0)
                var cleared = emojis;
                cleared[currentOpened[0]].class = 'hide'
                cleared[currentOpened[1]].class = 'hide'
                setEmojis(cleared)
                setcurrentOpened([])
                setToCompare([])
            }, 600);
        }
        else if (openedCount === 2 && toCompare[0] === toCompare[1]) {
            setOpenedCount(0)
                setcurrentOpened([])
                setToCompare([])
        }
    })

    useEffect(() => {
        emojis.sort(() => Math.random() - 0.5);
        return () => {
          
        }
      }, []);

    return (
        <div className='memorygame'>
            <h1>MEMORY GAME</h1>
            <h2><span>STEPS: </span>{steps ===  parseInt(steps, 10) ?  steps : steps - 0.5}</h2>
            <button onClick={shuffle}>RESTART</button>
            <div className='card-container'>
                {emojis.map((a, index) => (
                    <div onClick={() => reveal(index)} className={a.class}>
                        <div className='card-front'>{a.emoji}</div>
                        <div className='card-back'></div>
                    </div>)
                )}
            </div>
        </div>
    );
}

export default Memorygame;







