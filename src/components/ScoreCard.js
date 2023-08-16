import React from 'react';
import dice1 from '../dice_1-512.webp';
import dice2 from '../dice_2-512.webp';
import dice3 from '../dice_3-512.webp';
import dice4 from '../dice_4-512.webp';
import dice5 from '../dice_5-512.webp';
import dice6 from '../dice_6-512.webp';
import {isValidOfKind, scoring} from '../utils/tools'
import { useState, useEffect } from 'react';
import DiceCup from './DiceCup';

function ScoreCard({scoreCard, setScoreCard}) {
    const [currentRollCount, setCurrentRollCount] = useState(0);
    const [diceRead, setDiceRead] = useState([5,5,5,5,5]);

    const dicePics = {
    1 : dice1,
    2 : dice2,
    3 : dice3,
    4 : dice4,
    5 : dice5,
    6 : dice6
    }    

    function rollOneDie(){
        let number = Math.floor(Math.random() * 6);
        return number + 1;
    }

    const handleClick = (e) =>{
        switch(e.target.id){
            case 'acesScore': {
                let sc = {'aces' : scoring('aces', diceRead), ...scoreCard};
                console.log(sc)
                setScoreCard({'aces' : scoring('aces', diceRead), ...scoreCard});
                break;}

            default: break;
        }
    }

    useEffect(() => {
      console.log(scoreCard)
    }, [scoreCard])
    

    return (
    <div className="App">
        <div>
        <h1>Yahtzee</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="col1">Upper Section</th>
                        <th className="howToScore">How To Score</th>
                        <th>Game #1</th>
                        <th>Game #2</th>
                        <th>Game #3</th>
                        <th>Game #4</th>
                        <th>Game #5</th>
                        <th>Game #6</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="ones game1">
                        <td className="col1">Aces <img src={dice1} className="diceImg"/> =1</td>
                        <td className="howToScore">Count and add only Aces</td>
                        <td onClick={(e) => {handleClick(e)}} id = "acesScore" className="ones game1 cell"></td>
                        <td className="ones game2 cell"></td>
                        <td className="ones game3 cell"></td>
                        <td className="ones game4 cell"></td>
                        <td className="ones game5 cell"></td>
                        <td className="ones game6 cell"></td>
                    </tr>
                    <tr className="twos">
                        <td className="col1">Twos <img src={dice2} className="diceImg"/> =2</td>
                        <td className="howToScore">Count and add only Twos</td>
                        <td className="twos game1 cell"></td>
                        <td className="twos game2 cell"></td>
                        <td className="twos game3 cell"></td>
                        <td className="twos game4 cell"></td>
                        <td className="twos game5 cell"></td>
                        <td className="twos game6 cell"></td>
                    </tr>
                    <tr className="threes">
                        <td className="col1">Threes <img src={dice3} className="diceImg"/> =3</td>
                        <td className="howToScore">Count and add only Threes</td>
                        <td className="threes game1 cell"></td>
                        <td className="threes game2 cell"></td>
                        <td className="threes game3 cell"></td>
                        <td className="threes game4 cell"></td>
                        <td className="threes game5 cell"></td>
                        <td className="threes game6 cell"></td>
                    </tr>
                    <tr className="fours">
                        <td className="col1">Fours <img src={dice4} className="diceImg"/> =4</td>
                        <td className="howToScore">Count and add only Fours</td>
                        <td className="fours game1 cell"></td>
                        <td className="fours game2 cell"></td>
                        <td className="fours game3 cell"></td>
                        <td className="fours game4 cell"></td>
                        <td className="fours game5 cell"></td>
                        <td className="fours game6 cell"></td>
                    </tr>
                    <tr className="fives">
                        <td className="col1">Fives <img src={dice5} className="diceImg"/> =5</td>
                        <td className="howToScore">Count and add only Fives</td>
                        <td className="fives game1 cell"></td>
                        <td className="fives game2 cell"></td>
                        <td className="fives game3 cell"></td>
                        <td className="fives game4 cell"></td>
                        <td className="fives game5 cell"></td>
                        <td className="fives game6 cell"></td>
                    </tr>
                    <tr className="sixes">
                        <td className="col1">Sixes <img src={dice6} className="diceImg"/> =6</td>
                        <td className="howToScore">Count and add only Sixes</td>
                        <td className="sixes game1 cell"></td>
                        <td className="sixes game2 cell"></td>
                        <td className="sixes game3 cell"></td>
                        <td className="sixes game4 cell"></td>
                        <td className="sixes game5 cell"></td>
                        <td className="sixes game6 cell"></td>
                    </tr>
                    <tr className="subTotal col1">
                        <td>Total Score</td>
                        <td className="howToScore">Arrow Here</td>
                        <td className="subTotal game1 cell"></td>
                        <td className="subTotal game2 cell"></td>
                        <td className="subTotal game3 cell"></td>
                        <td className="subTotal game4 cell"></td>
                        <td className="subTotal game5 cell"></td>
                        <td className="subTotal game6 cell"></td>
                    </tr>
                    <tr className="bonus col1">
                        <td>Bonus <span>If your score is 63 or over</span></td>
                        <td className="howToScore">Score 35</td>
                        <td className="bonus game1 cell"></td>
                        <td className="bonus game2 cell"></td>
                        <td className="bonus game3 cell"></td>
                        <td className="bonus game4 cell"></td>
                        <td className="bonus game5 cell"></td>
                        <td className="bonus game6 cell"></td>
                    </tr>
                    <tr className="total col1">
                        <td className="">Total Score <span>Of upper section</span></td>
                        <td className="howToScore">Arrow Here</td>
                        <td className="total game1 cell"></td>
                        <td className="total game2 cell"></td>
                        <td className="total game3 cell"></td>
                        <td className="total game4 cell"></td>
                        <td className="total game5 cell"></td>
                        <td className="total game6 cell"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4>Lower Section</h4>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="col1">Three of a Kind</td>
                        <td className="howToScore">Add Total of All Dice</td>
                        <td className="threeOfKind game1 cell"></td>
                        <td className="threeOfKind game2 cell"></td>
                        <td className="threeOfKind game3 cell"></td>
                        <td className="threeOfKind game4 cell"></td>
                        <td className="threeOfKind game5 cell"></td>
                        <td className="threeOfKind game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">Four of a Kind</td>
                        <td className="howToScore">Add Total of All Dice</td>
                        <td className="fourOfKind game1 cell"></td>
                        <td className="fourOfKind game2 cell"></td>
                        <td className="fourOfKind game3 cell"></td>
                        <td className="fourOfKind game4 cell"></td>
                        <td className="fourOfKind game5 cell"></td>
                        <td className="fourOfKind game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">Full House</td>
                        <td className="howToScore">Score 25</td>
                        <td className="fullHouse game1 cell"></td>
                        <td className="fullHouse game2 cell"></td>
                        <td className="fullHouse game3 cell"></td>
                        <td className="fullHouse game4 cell"></td>
                        <td className="fullHouse game5 cell"></td>
                        <td className="fullHouse game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">sm. Straight <span>Sequence of 4</span></td>
                        <td className="howToScore">Score 30</td>
                        <td className="smStraight game1 cell"></td>
                        <td className="smStraight game2 cell"></td>
                        <td className="smStraight game3 cell"></td>
                        <td className="smStraight game4 cell"></td>
                        <td className="smStraight game5 cell"></td>
                        <td className="smStraight game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">lg. Straight <span>Sequence of 5</span></td>
                        <td className="howToScore">Score 40</td>
                        <td className="lgStraight game1 cell"></td>
                        <td className="lgStraight game2 cell"></td>
                        <td className="lgStraight game3 cell"></td>
                        <td className="lgStraight game4 cell"></td>
                        <td className="lgStraight game5 cell"></td>
                        <td className="lgStraight game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">Yahtzee <span>5 of a Kind</span></td>
                        <td className="howToScore">Score 50</td>
                        <td className="yahtzee game1 cell"></td>
                        <td className="yahtzee game2 cell"></td>
                        <td className="yahtzee game3 cell"></td>
                        <td className="yahtzee game4 cell"></td>
                        <td className="yahtzee game5 cell"></td>
                        <td className="yahtzee game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1 yahtzeeBonus" rowSpan="2">Yahtzee Bonus</td>
                        <td className="howToScore">&#10004; for each bonus</td>
                        <td className="yahtzeeBonusCells game1" >
                                <div className="game1Bonus bonusCell1 bonusCell"></div>
                                <div className="game1Bonus bonusCell2 bonusCell"></div>
                                <div className="game1Bonus bonusCell3 bonusCell"></div>
                        </td>
                        <td className="yahtzee game2 cell"></td>
                        <td className="yahtzee game3 cell"></td>
                        <td className="yahtzee game4 cell"></td>
                        <td className="yahtzee game5 cell"></td>
                        <td className="yahtzee game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="howToScore">Score 100 for each &#10004;</td>
                        <td className="yahtzee game1 cell"></td>
                        <td className="yahtzee game2 cell"></td>
                        <td className="yahtzee game3 cell"></td>
                        <td className="yahtzee game4 cell"></td>
                        <td className="yahtzee game5 cell"></td>
                        <td className="yahtzee game6 cell"></td>
                    </tr>
                    <tr>
                        <td className="col1">Chance</td>
                        <td className="howToScore">Add Total of All Dice</td>
                        <td className="chance game1 cell"></td>
                        <td className="chance game2 cell"></td>
                        <td className="chance game3 cell"></td>
                        <td className="chance game4 cell"></td>
                        <td className="chance game5 cell"></td>
                        <td className="chance game6 cell"></td>
                    </tr>
                    <tr className="totalLower">
                        <td className="col1">Total <span>of lower section</span></td>
                        <td className="howToScore">Arrow Here</td>
                        <td className="totalLower game1 cell"></td>
                        <td className="totalLower game2 cell"></td>
                        <td className="totalLower game3 cell"></td>
                        <td className="totalLower game4 cell"></td>
                        <td className="totalLower game5 cell"></td>
                        <td className="totalLower game6 cell"></td>
                    </tr>
                    <tr className="totalUpper col1">
                        <td>Total <span>of upper section</span></td>
                        <td className="howToScore">Arrow Here</td>
                        <td className="totalUpper game1 cell"></td>
                        <td className="totalUpper game2 cell"></td>
                        <td className="totalUpper game3 cell"></td>
                        <td className="totalUpper game4 cell"></td>
                        <td className="totalUpper game5 cell"></td>
                        <td className="totalUpper game6 cell"></td>
                    </tr>
                    <tr className="grandTotal col1">
                        <td className="">Grand Total</td>
                        <td className="howToScore">Arrow Here</td>
                        <td className="grandTotal game1 cell"></td>
                        <td className="grandTotal game2 cell"></td>
                        <td className="grandTotal game3 cell"></td>
                        <td className="grandTotal game4 cell"></td>
                        <td className="grandTotal game5 cell"></td>
                        <td className="grandTotal game6 cell"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        {DiceCup({
            dicePics, 
            diceRead, 
            setDiceRead, 
            rollOneDie, 
            currentRollCount, 
            setCurrentRollCount})}
    </div>
    )
}

export default ScoreCard