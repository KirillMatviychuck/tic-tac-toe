import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from './GameButtons.module.scss';

export const GameButtons: FC<Props> = ({ resetGame }) => {
    const navigate = useNavigate();
    const navigateGameMenu = () => navigate('/game-menu')
    return (
        <div className={style.gameButtons}>
            <button className={style.commonBtn} onClick={resetGame}>RESET GAME</button>
            <button className={style.commonBtn} onClick={navigateGameMenu}>GAME MENU</button>
        </div>
    )
}

type Props = {
    resetGame: () => void
}