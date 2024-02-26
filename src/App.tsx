import { MouseEvent, useState } from 'react';
import styles from './App.module.scss';
import { MainScreen } from './components/MainScreen/MainScreen';
import { checkWinner } from './utils/checkWinner';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GameMenu } from './components/GameMenu/GameMenu';
import vsComp from './assets/game-menu/vs-computer.jpg';
import oneOnOne from './assets/game-menu/one-on-one.jpg';

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
  const [activeGameMode, setActiveGameMode] = useState<null | number>(null)
  const gameModes = [{ mode: 'Play vs comp', image: vsComp }, { mode: 'Play vs friend', image: oneOnOne }]
  const changeModeHandler = (modeIndex: number) => setActiveGameMode(modeIndex)

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

  if (winner === 'cross' && !isModalOpen) setIsModalOpen(true)
  if (winner === 'circle' && !isModalOpen) setIsModalOpen(true)

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Navigate to='game-board' />} />
        <Route path='game-board' element={<MainScreen gameState={state}
          clickHandler={clickHandler}
          isModalOpen={isModalOpen}
          resetGame={resetGame} />} />
        <Route path='/game-menu' element={<GameMenu changeModeHandler={changeModeHandler}
          activeGameMode={activeGameMode}
          gameModes={gameModes} />} />
      </Routes>
    </div>
  )
}
export type mainStateType = {
  cellID: number
  value: string
}

export default App
