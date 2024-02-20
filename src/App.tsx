import { MouseEvent, useState } from 'react';
import styles from './App.module.scss';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }));
    setIsModalOpen(false);
  }
  const winner = checkWinner(state)

  if (winner === 'circle' || winner === 'cross' && !isModalOpen) setIsModalOpen(true)

  return (
    <div className={styles.app}>
      <MainScreen gameState={state}
        clickHandler={clickHandler}
        isModalOpen={isModalOpen}
        resetGame={resetGame} />
    </div>
  )
}
export type mainStateType = {
  cellID: number
  value: string
}

export default App
