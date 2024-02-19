import { FC, MouseEvent } from 'react';
import { Filler } from '../Filler/Filler';
import style from './GameTable.module.scss';
import { mainStateType } from '../../App';

export const GameTable: FC<Props> = ({ gameState, clickHandler }) => {

    return (
        <div className={style.tableGrid}>
            {gameState.map((cell, index) => <div key={index}
                onClick={(e) => clickHandler(e, cell.cellID)}
                onContextMenu={(e) => clickHandler(e, cell.cellID)}
                className={style.cell}>
                <Filler fillerValue={cell.value} />
            </div>)}
        </div>
    )
}

type Props = {
    gameState: mainStateType[]
    clickHandler: (e: MouseEvent, id: number) => void
}

