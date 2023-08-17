function addRepeatNum(diceArr, num) {
    let sum = 0;
    for(let i = 0; i < 5; i++){
        if(diceArr[i] === num){
            sum += num;
        }
    }
    return sum;
}

function totalDice(diceArr){
    let sum = 0;
    for(let i = 0; i < 5; i++){
        sum += diceArr[i];
    }
    return sum;
}

function isValidOfKind(diceArr, quantity){
    const quantities = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }
    for(let i = 0; i < 5; i++){
        quantities[diceArr[i]] += 1;
    }
    for(let key in quantities){
        if(quantities[key] >= quantity){
            return true;
        }
    }
    return false;
}

function isValidStraight(diceArr, len) {
    diceArr.sort(function(a, b) { return a - b });
    diceArr = [...new Set(diceArr)];
    let sequenceLength = 1;
    for (let i = 0; i < 4; i++) {
      if (diceArr[i + 1] === diceArr[i] + 1) {
        sequenceLength++;
        if (sequenceLength >= len) {
          return true;
        }
      } else {
        sequenceLength = 1;
      }
    }
    return false;
  }

function isValidFullHouse(diceArr) {
    let firstNum = [diceArr[0], 1];
    let secondNum;
    for (let i = 1; i < 5; i++) {
        if (diceArr[i] !== firstNum[0] && !secondNum) {
            secondNum = [diceArr[i], 1];
        } else if (diceArr[i] !== firstNum[0] && diceArr[i] !== secondNum[0]) {
            return false;
        } else {
            if (diceArr[i] === firstNum[0]) {
                firstNum[1]++;
            } else {
                secondNum[1]++
            }
        }
    }
    if (firstNum[1] === 2 || firstNum[1] === 3) return true;
    else return false;
}

function scoring(id, diceArr) {
    switch(id){
        case 'acesScore': return addRepeatNum(diceArr, 1);
            break; 
        case 'twosScore': return addRepeatNum(diceArr, 2);
            break;
        case 'threesScore': return addRepeatNum(diceArr, 3);
            break;
        case 'foursScore': return addRepeatNum(diceArr, 4);
            break;
        case 'fivesScore': return addRepeatNum(diceArr, 5);
            break;
        case 'sixesScore':return addRepeatNum(diceArr, 6);
            break;
        case 'bonusScore': return 35;
            break;
        case 'threeOfKindScore': if(isValidOfKind(diceArr, 3)){
                return totalDice(diceArr); 
            }else return 0;
            break;
        case 'fourOfKindScore': if(isValidOfKind(diceArr, 4)){
            return totalDice(diceArr); 
        }else return 0;
        break;
        case 'fullHouseScore': if(isValidFullHouse(diceArr)){
            return 25;
        }else return 0;
            break;
        case 'smStrScore': if(isValidStraight(diceArr, 4)){
            return 30;
        }else return 0;
            break;
        case 'lgStrScore': if(isValidStraight(diceArr, 5)){
            return 40;
        }else return 0;
            break;
        case 'yahtzeeScore': if(isValidOfKind(diceArr, 5)){
            return 50; 
        }else return 0;
        break;
        case 'yahtzeeBonusScore': return 100;
            break;
        case 'chanceScore': return totalDice(diceArr);
            break;
        default: return;
            break;
    }
}

module.exports = {scoring, isValidOfKind}