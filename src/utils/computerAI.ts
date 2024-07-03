import { mainStateType } from "../App"

export const computerAI = (gameBoard: mainStateType[]) => {
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const opponentIndices = gameBoard.filter(boardCeil => boardCeil.value === 'cross').map(ceils => ceils.cellID)
    // const coinFlip = Math.floor(Math.random() * 2)
    let indexToWin;

    for (let i = 0; i < winningCombinations.length; i++) {
        const element = winningCombinations[i];
        const arr = opponentIndices.filter(item => element.includes(item))
        if (arr.length > 1) {
            indexToWin = element.filter(num => !arr.includes(num))[0]
            break
        }
    }
    if (indexToWin) {
        return indexToWin
    }

}

