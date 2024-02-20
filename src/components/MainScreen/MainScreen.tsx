import { FC, MouseEvent } from 'react';
import { mainStateType } from '../../App';
import { GameTable } from '../GameTable/GameTable';
import { ModalWinnerScreen } from '../ModalWinnerScreen/ModalWinnerScreen';

export const MainScreen: FC<Props> = ({ gameState, isModalOpen, clickHandler, resetGame }) => {
    return (
        <div>
            <GameTable gameState={gameState} clickHandler={clickHandler} />
            <ModalWinnerScreen isModalOpen={isModalOpen} resetGame={resetGame} />
        </div>
    )
}

type Props = {
    gameState: mainStateType[]
    clickHandler: (e: MouseEvent, id: number) => void
    isModalOpen: boolean
    resetGame: () => void
}