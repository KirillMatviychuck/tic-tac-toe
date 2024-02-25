import { FC, MouseEvent } from 'react';
import { mainStateType } from '../../App';
import { GameTable } from '../GameTable/GameTable';
import { ModalWinnerScreen } from '../ModalWinnerScreen/ModalWinnerScreen';
import { Title } from '../Title/Title';

export const MainScreen: FC<Props> = ({ gameState, isModalOpen, clickHandler, resetGame }) => {
    return (
        <div>
            <Title />
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