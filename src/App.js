import './App.css';
import ScoreCard from './components/ScoreCard';
import { useState } from 'react';


function App() {
  const [scoreCard, setScoreCard] = useState({
    aces: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    bonus: null,
    threeOfKind: null,
    fourOfKind: null,
    fullHouse: null,
    smStr: null,
    lgStr: null,
    yahtzee: null,
    yahtzeeBonus: undefined,
    chance: 0
  })

  return (
    <div>
      {ScoreCard({scoreCard, setScoreCard})}
    </div>
  );
}

export default App;
