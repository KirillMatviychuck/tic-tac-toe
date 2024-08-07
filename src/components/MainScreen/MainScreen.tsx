import { FC, MouseEvent } from 'react';
import { mainStateType } from '../../App';
import { GameTable } from '../GameTable/GameTable';
import { ModalWinnerScreen } from '../ModalWinnerScreen/ModalWinnerScreen';
import { Title } from '../Title/Title';
import style from './MainScreen.module.scss';
import { GameButtons } from '../GameButtons/GameButtons';

export const MainScreen: FC<Props> = ({ gameState, winner, isModalOpen, clickHandler, resetGame }) => {
    return (
        <div className={style.mainScreen}>
            <Title />
            <GameTable gameState={gameState} clickHandler={clickHandler} />
            <GameButtons resetGame={resetGame} />
            <ModalWinnerScreen isModalOpen={isModalOpen} resetGame={resetGame} winner={winner} />
        </div>
    )
}

type Props = {
    gameState: mainStateType[]
    winner: string
    clickHandler: (e: MouseEvent, id: number) => void
    isModalOpen: boolean
    resetGame: () => void
}