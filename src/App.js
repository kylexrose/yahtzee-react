import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Yahtzee</h1>
    <div>
        <table>
            <tr>
                <th class="col1">Upper Section</th>
                <th class="howToScore">How To Score</th>
                <th>Game #1</th>
                <th>Game #2</th>
                <th>Game #3</th>
                <th>Game #4</th>
                <th>Game #5</th>
                <th>Game #6</th>
            </tr>
            <tr class="ones game1">
                <td class="col1">Aces <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png" class="dice"/> =1</td>
                <td class="howToScore">Count and add only Aces</td>
                <td class="ones game1 cell"></td>
                <td class="ones game2 cell"></td>
                <td class="ones game3 cell"></td>
                <td class="ones game4 cell"></td>
                <td class="ones game5 cell"></td>
                <td class="ones game6 cell"></td>
            </tr>
            <tr class="twos">
                <td class="col1">Twos <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png" class="dice"/> =2</td>
                <td class="howToScore">Count and add only Twos</td>
                <td class="twos game1 cell"></td>
                <td class="twos game2 cell"></td>
                <td class="twos game3 cell"></td>
                <td class="twos game4 cell"></td>
                <td class="twos game5 cell"></td>
                <td class="twos game6 cell"></td>
            </tr>
            <tr class="threes">
                <td class="col1">Threes <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png" class="dice"/> =3</td>
                <td class="howToScore">Count and add only Threes</td>
                <td class="threes game1 cell"></td>
                <td class="threes game2 cell"></td>
                <td class="threes game3 cell"></td>
                <td class="threes game4 cell"></td>
                <td class="threes game5 cell"></td>
                <td class="threes game6 cell"></td>
            </tr>
            <tr class="fours">
                <td class="col1">Fours <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png" class="dice"/> =4</td>
                <td class="howToScore">Count and add only Fours</td>
                <td class="fours game1 cell"></td>
                <td class="fours game2 cell"></td>
                <td class="fours game3 cell"></td>
                <td class="fours game4 cell"></td>
                <td class="fours game5 cell"></td>
                <td class="fours game6 cell"></td>
            </tr>
            <tr class="fives">
                <td class="col1">Fives <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png" class="dice"/> =5</td>
                <td class="howToScore">Count and add only Fives</td>
                <td class="fives game1 cell"></td>
                <td class="fives game2 cell"></td>
                <td class="fives game3 cell"></td>
                <td class="fives game4 cell"></td>
                <td class="fives game5 cell"></td>
                <td class="fives game6 cell"></td>
            </tr>
            <tr class="sixes">
                <td class="col1">Sixes <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png" class="dice"/> =6</td>
                <td class="howToScore">Count and add only Sixes</td>
                <td class="sixes game1 cell"></td>
                <td class="sixes game2 cell"></td>
                <td class="sixes game3 cell"></td>
                <td class="sixes game4 cell"></td>
                <td class="sixes game5 cell"></td>
                <td class="sixes game6 cell"></td>
            </tr>
            <tr class="subTotal col1">
                <td>Total Score</td>
                <td class="howToScore">Arrow Here</td>
                <td class="subTotal game1 cell"></td>
                <td class="subTotal game2 cell"></td>
                <td class="subTotal game3 cell"></td>
                <td class="subTotal game4 cell"></td>
                <td class="subTotal game5 cell"></td>
                <td class="subTotal game6 cell"></td>
            </tr>
            <tr class="bonus col1">
                <td>Bonus <span>If your score is 63 or over</span></td>
                <td class="howToScore">Score 35</td>
                <td class="bonus game1 cell"></td>
                <td class="bonus game2 cell"></td>
                <td class="bonus game3 cell"></td>
                <td class="bonus game4 cell"></td>
                <td class="bonus game5 cell"></td>
                <td class="bonus game6 cell"></td>
            </tr>
            <tr class="total col1">
                <td class="">Total Score <span>Of upper section</span></td>
                <td class="howToScore">Arrow Here</td>
                <td class="total game1 cell"></td>
                <td class="total game2 cell"></td>
                <td class="total game3 cell"></td>
                <td class="total game4 cell"></td>
                <td class="total game5 cell"></td>
                <td class="total game6 cell"></td>
            </tr>
        </table>
    </div>
    <h4>Lower Section</h4>
    <div>
        <table>
            <tr>
                <td class="col1">Three of a Kind</td>
                <td class="howToScore">Add Total of All Dice</td>
                <td class="threeOfKind game1 cell"></td>
                <td class="threeOfKind game2 cell"></td>
                <td class="threeOfKind game3 cell"></td>
                <td class="threeOfKind game4 cell"></td>
                <td class="threeOfKind game5 cell"></td>
                <td class="threeOfKind game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">Four of a Kind</td>
                <td class="howToScore">Add Total of All Dice</td>
                <td class="fourOfKind game1 cell"></td>
                <td class="fourOfKind game2 cell"></td>
                <td class="fourOfKind game3 cell"></td>
                <td class="fourOfKind game4 cell"></td>
                <td class="fourOfKind game5 cell"></td>
                <td class="fourOfKind game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">Full House</td>
                <td class="howToScore">Score 25</td>
                <td class="fullHouse game1 cell"></td>
                <td class="fullHouse game2 cell"></td>
                <td class="fullHouse game3 cell"></td>
                <td class="fullHouse game4 cell"></td>
                <td class="fullHouse game5 cell"></td>
                <td class="fullHouse game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">sm. Straight <span>Sequence of 4</span></td>
                <td class="howToScore">Score 30</td>
                <td class="smStraight game1 cell"></td>
                <td class="smStraight game2 cell"></td>
                <td class="smStraight game3 cell"></td>
                <td class="smStraight game4 cell"></td>
                <td class="smStraight game5 cell"></td>
                <td class="smStraight game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">lg. Straight <span>Sequence of 5</span></td>
                <td class="howToScore">Score 40</td>
                <td class="lgStraight game1 cell"></td>
                <td class="lgStraight game2 cell"></td>
                <td class="lgStraight game3 cell"></td>
                <td class="lgStraight game4 cell"></td>
                <td class="lgStraight game5 cell"></td>
                <td class="lgStraight game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">Yahtzee <span>5 of a Kind</span></td>
                <td class="howToScore">Score 50</td>
                <td class="yahtzee game1 cell"></td>
                <td class="yahtzee game2 cell"></td>
                <td class="yahtzee game3 cell"></td>
                <td class="yahtzee game4 cell"></td>
                <td class="yahtzee game5 cell"></td>
                <td class="yahtzee game6 cell"></td>
            </tr>
            <tr>
                <td class="col1 yahtzeeBonus" rowspan="2">Yahtzee Bonus</td>
                <td class="howToScore">&#10004; for each bonus</td>
                <td class="yahtzeeBonusCells game1" >
                        <div class="game1Bonus bonusCell1 bonusCell"></div>
                        <div class="game1Bonus bonusCell2 bonusCell"></div>
                        <div class="game1Bonus bonusCell3 bonusCell"></div>
                </td>
                <td class="yahtzee game2 cell"></td>
                <td class="yahtzee game3 cell"></td>
                <td class="yahtzee game4 cell"></td>
                <td class="yahtzee game5 cell"></td>
                <td class="yahtzee game6 cell"></td>
            </tr>
            <tr>
                <td class="howToScore">Score 100 for each &#10004;</td>
                <td class="yahtzee game1 cell"></td>
                <td class="yahtzee game2 cell"></td>
                <td class="yahtzee game3 cell"></td>
                <td class="yahtzee game4 cell"></td>
                <td class="yahtzee game5 cell"></td>
                <td class="yahtzee game6 cell"></td>
            </tr>
            <tr>
                <td class="col1">Chance</td>
                <td class="howToScore">Add Total of All Dice</td>
                <td class="chance game1 cell"></td>
                <td class="chance game2 cell"></td>
                <td class="chance game3 cell"></td>
                <td class="chance game4 cell"></td>
                <td class="chance game5 cell"></td>
                <td class="chance game6 cell"></td>
            </tr>
            <tr class="totalLower">
                <td class="col1">Total <span>of lower section</span></td>
                <td class="howToScore">Arrow Here</td>
                <td class="totalLower game1 cell"></td>
                <td class="totalLower game2 cell"></td>
                <td class="totalLower game3 cell"></td>
                <td class="totalLower game4 cell"></td>
                <td class="totalLower game5 cell"></td>
                <td class="totalLower game6 cell"></td>
            </tr>
            <tr class="totalUpper col1">
                <td>Total <span>of upper section</span></td>
                <td class="howToScore">Arrow Here</td>
                <td class="totalUpper game1 cell"></td>
                <td class="totalUpper game2 cell"></td>
                <td class="totalUpper game3 cell"></td>
                <td class="totalUpper game4 cell"></td>
                <td class="totalUpper game5 cell"></td>
                <td class="totalUpper game6 cell"></td>
            </tr>
            <tr class="grandTotal col1">
                <td class="">Grand Total</td>
                <td class="howToScore">Arrow Here</td>
                <td class="grandTotal game1 cell"></td>
                <td class="grandTotal game2 cell"></td>
                <td class="grandTotal game3 cell"></td>
                <td class="grandTotal game4 cell"></td>
                <td class="grandTotal game5 cell"></td>
                <td class="grandTotal game6 cell"></td>
            </tr>
        </table>
    </div>
    </div>
  );
}

export default App;
