import style from './GameMenu.module.scss';
import oneOnOne from '../../assets/game-menu/one-on-one.jpg';
import vsComp from '../../assets/game-menu/vs-computer.jpg';

export const GameMenu = () => {
    return (
        <main className={style.gameMenu}>
            <h1 className={style.title}>
                Welcome to the <span>TIC-TAC-TOE</span> game<br />
                select game mode:
            </h1>
            <div className={style.selectMode}>
                <div className={style.vsCompBlock}>
                    <div>
                        <span>Play</span>
                        <span>vs</span>
                        <span>computer</span>
                    </div>
                    <img src={vsComp} alt="play one on one" />
                </div>
                <div className={style.oneOnOneBlock}>
                    <div>
                        <span>Play</span>
                        <span>vs</span>
                        <span>friend</span>
                    </div>
                    <img src={oneOnOne} alt="play one on one" />
                </div>
            </div>
            <button className={style.startBtn}>START</button>
        </main>
    )
}