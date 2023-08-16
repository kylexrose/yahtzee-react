import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';


function DiceCup({dicePics, 
                  diceRead, 
                  setDiceRead, 
                  rollOneDie, 
                  currentRollCount, 
                  setCurrentRollCount
                }) {


    const [isDice1Held, setIsDice1Held] = useState(false);
    const [isDice2Held, setIsDice2Held] = useState(false);
    const [isDice3Held, setIsDice3Held] = useState(false);
    const [isDice4Held, setIsDice4Held] = useState(false);
    const [isDice5Held, setIsDice5Held] = useState(false);
    const [dice1, setDice1] = useState(dicePics[5]);
    const [dice2, setDice2] = useState(dicePics[5]);
    const [dice3, setDice3] = useState(dicePics[5]);
    const [dice4, setDice4] = useState(dicePics[5]);
    const [dice5, setDice5] = useState(dicePics[5]);


    const onClickDie = (e) =>{
        switch(e.target.id){
            case 'dice1': 
                setIsDice1Held(!isDice1Held);
                break;
            case 'dice2': 
                setIsDice2Held(!isDice2Held);
                break;
            case 'dice3': 
                setIsDice3Held(!isDice3Held);
                break;
            case 'dice4': 
                setIsDice4Held(!isDice4Held);
                break;
            case 'dice5': 
                setIsDice5Held(!isDice5Held);
                break;
            default:
              break;
        }
    }

    const rollDice = () => {
      if(currentRollCount >= 3){
        return
      }
      const newDiceRead = diceRead;
      for(let i = 0; i < 5; i++){
        if(eval(`!isDice${i+1}Held`)){
          const newNum = rollOneDie();
          eval(`setDice${i+1}(dicePics[newNum])`)
          newDiceRead[i] = newNum;
        }
      }
      setDiceRead(newDiceRead)
      setCurrentRollCount(currentRollCount+1);
    }
    
  return (
    <div className='dice'>
        <img id="dice1" key="dice1" className={`die ${isDice1Held ? 'heldDie': ""}`} src={dice1} onClick={onClickDie} alt="dice 1" />
        <img id="dice2" key="dice2" className={`die ${isDice2Held ? 'heldDie': ""}`} src={dice2} onClick={onClickDie} alt="" />
        <img id="dice3" key="dice3" className={`die ${isDice3Held ? 'heldDie': ""}`} src={dice3} onClick={onClickDie} alt="" />
        <img id="dice4" key="dice4" className={`die ${isDice4Held ? 'heldDie': ""}`} src={dice4} onClick={onClickDie} alt="" />
        <img id="dice5" key="dice5" className={`die ${isDice5Held ? 'heldDie': ""}`} src={dice5} onClick={onClickDie} alt="" />
        <Button disabled={currentRollCount >=3} variant='contained' onClick={() => rollDice()}>Shake Cup</Button>
    </div>
  )
}

export default DiceCup