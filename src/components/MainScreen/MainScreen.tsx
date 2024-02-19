import { FC, MouseEvent } from 'react';
import { GameTable } from '../GameTable/GameTable';
import style from './MainScreen.module.scss';
import { mainStateType } from '../../App';

export const MainScreen: FC<Props> = ({ gameState, clickHandler }) => {
    return (
        <div className={style.mainScreen}>
            <GameTable gameState={gameState} clickHandler={clickHandler} />
        </div>
    )
}

type Props = {
    gameState: mainStateType[]
    clickHandler: (e: MouseEvent, id: number) => void
}