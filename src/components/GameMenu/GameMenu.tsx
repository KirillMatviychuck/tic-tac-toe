import { FC } from 'react';
import style from './GameMenu.module.scss';
import { useNavigate } from 'react-router-dom';

export const GameMenu: FC<Props> = ({ activeGameMode, changeModeHandler, gameModes }) => {
    const navigate = useNavigate();
    const onClickHandler = () => navigate('/')
    return (
        <main className={style.gameMenu}>
            <h1 className={style.title}>
                Welcome to the <span>TIC-TAC-TOE</span> game<br />
                select game mode:
            </h1>
            <div className={style.selectMode}>
                {gameModes.map((gameMode, index) => {
                    return (
                        <div key={index}
                            className={activeGameMode === index ? `${style.gameModeBlock} ${style.activeGameModeBlock}` : style.gameModeBlock}
                            onClick={() => changeModeHandler(index)}>
                            <span>{gameMode.mode}</span>
                            <img src={gameMode.image} alt={gameMode.mode} />
                        </div>
                    )
                })}
            </div>
            <button className={style.startBtn} onClick={onClickHandler}>START</button>
        </main>
    )
}

type Props = {
    activeGameMode: null | number
    changeModeHandler: (index: number) => void
    gameModes: Array<{ mode: string, image: string }>
}