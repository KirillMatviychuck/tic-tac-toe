import { useState, MouseEvent } from 'react';
import styles from './App.module.scss';
import { GameInfo } from './components/GameInfo/GameInfo';
import { MainScreen } from './components/MainScreen/MainScreen';
import { checkWinner } from './utils/checkWinner';

function App() {
  const [state, setState] = useState<mainStateType[]>([
    { cellID: 0, value: 'none' },
    { cellID: 1, value: 'none' },
    { cellID: 2, value: 'none' },
    { cellID: 3, value: 'none' },
    { cellID: 4, value: 'none' },
    { cellID: 5, value: 'none' },
    { cellID: 6, value: 'none' },
    { cellID: 7, value: 'none' },
    { cellID: 8, value: 'none' },
  ])

  const clickHandler = (e: MouseEvent, id: number) => {
    e.preventDefault();
    if (e.type === 'click') {
      setState(state.map(item => item.cellID === id && item.value === 'none' ? { ...item, value: 'cross' } : item))
    }
    if (e.type === 'contextmenu') {
      setState(state.map(item => item.cellID === id && item.value === 'none' ? { ...item, value: 'circle' } : item))
    }
  }

  const resetGame = () => {
    setState(state.map(item => {
      return { ...item, value: 'none' }
    }))
  }
  const winner = checkWinner(state)

  if (winner === 'circle' || winner === 'cross') return <div>Winner is {winner}</div>


  return (
    <div className={styles.app}>
      <GameInfo resetGame={resetGame} />
      <MainScreen gameState={state} clickHandler={clickHandler} />
    </div>
  )
}
export type mainStateType = {
  cellID: number
  value: string
}

export default App
