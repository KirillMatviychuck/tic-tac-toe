import { MouseEvent, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import oneOnOne from './assets/game-menu/one-on-one.jpg';
import vsComp from './assets/game-menu/vs-computer.jpg';
import { GameMenu } from './components/GameMenu/GameMenu';
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
  const [playerTurn, setPlayerTurn] = useState(true);
  const [activeGameMode, setActiveGameMode] = useState<null | number>(null)
  const gameModes = [{ id: 0, mode: 'Play vs friend', image: oneOnOne }, { id: 1, mode: 'Play vs comp', image: vsComp }]
  useEffect(() => {
  }, [state])
  const changeModeHandler = (modeIndex: number) => setActiveGameMode(modeIndex)


  const clickHandler = (e: MouseEvent, id: number) => {
    // One on One game mode
    if (activeGameMode === 0) {
      e.preventDefault();
      if (e.type === 'click') {
        setState(state.map(item => item.cellID === id && item.value === 'none' ? { ...item, value: 'cross' } : item))
      }
      if (e.type === 'contextmenu') {
        setState(state.map(item => item.cellID === id && item.value === 'none' ? { ...item, value: 'circle' } : item))
      }
    }
    // VS Computer game mode

    if (activeGameMode === 1) {
      setPlayerTurn(false)
      if (e.type === 'click') {
        setState(state.map(item => item.cellID === id && item.value === 'none' ? { ...item, value: 'cross' } : item))
        setTimeout(() => {
          let randomIndex: number;
          for (let i = 0; i < 1000; i++) {
            randomIndex = Math.floor(Math.random() * 9)
            if (state[randomIndex].value === 'none' && randomIndex !== id) break
          }
          setState(state.map(item => {
            if (item.cellID === randomIndex) return { ...item, value: 'circle' }
            if (item.cellID === id && item.value !== 'circle') return { ...item, value: 'cross' }
            return item
          }))
          setPlayerTurn(true)

        }, 500)
      }
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
          clickHandler={playerTurn ? clickHandler : () => { }}
          isModalOpen={isModalOpen}
          resetGame={resetGame}
        />} />
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
