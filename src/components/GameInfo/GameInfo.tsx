import { FC } from 'react';
import style from './GameInfo.module.scss';

export const GameInfo: FC<Props> = ({ resetGame }) => {
    return (
        <div className={style.gameInfo}>
            <h1>Game Info</h1>
            <button className={style.resetBtn} onClick={resetGame}>Reset game</button>
        </div>
    )
}

type Props = {
    resetGame: () => void
}