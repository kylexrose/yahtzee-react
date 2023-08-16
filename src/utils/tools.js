function addRepeatNum(diceArr, num) {
    console.log(diceArr, num)
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
    console.log(diceArr)
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
            return true
        }
    }
    return false;
}

function scoring(id, diceArr) {
    switch(id){
        case 'aces': return addRepeatNum(diceArr,1);
            break; 
        case 'twos': return addRepeatNum(diceArr, 2);
            break;
        case 'threes': return addRepeatNum(diceArr, 3);
            break;
        case 'fours': return addRepeatNum(diceArr, 4);
            break;
        case 'fives': return addRepeatNum(diceArr, 5);
            break;
        case 'sixes':return addRepeatNum(diceArr, 6);
            break;
        case 'bonus': return 35;
            break;
        case 'threeOfKind': return totalDice(diceArr);
            break;
        case 'fourOfKind': return totalDice(diceArr);
            break;
        case 'fullHouse': return 25;
            break;
        case 'smStr': return 30;
            break;
        case 'lgStr': return 40;
            break;
        case 'yahtzee': return 50;
            break;
        case 'yahtzeeBonus': return 100;
            break;
        case 'chance': return totalDice(diceArr);
            break;
        default: return;
            break;
    }
}

module.exports = {scoring, isValidOfKind}