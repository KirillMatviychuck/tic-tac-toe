import { mainStateType } from "../App";


export function checkWinner(gameTable: mainStateType[]) {
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let roundWinner = 'draw';
    winningCombinations.forEach(combination => {
        if (gameTable[combination[0]].value === 'circle' && gameTable[combination[1]].value === 'circle' && gameTable[combination[2]].value === 'circle') roundWinner = 'circle'
        if (gameTable[combination[0]].value === 'cross' && gameTable[combination[1]].value === 'cross' && gameTable[combination[2]].value === 'cross') roundWinner = 'cross'
    })
    return roundWinner
}


// 0 1 2
// 3 4 5
// 6 7 8