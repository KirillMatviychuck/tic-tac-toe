import { FC } from 'react';
import style from './ModalWinnerScreen.module.scss';

export const ModalWinnerScreen: FC<Props> = ({ isModalOpen, winner, resetGame }) => {
    return (
        <div>
            {isModalOpen && (
                <div className={style.overlay} >
                    <div className={style.modal}>
                        <div className={style.modalContent}>
                            <h2 className={style.title}>Winner is {winner} congratulations</h2>
                            <p className={style.text}>if you want start new game press the button below</p>
                            <button onClick={resetGame} className={style.commonBtn}>
                                Start new game
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

type Props = {
    isModalOpen: boolean
    winner: string
    resetGame: () => void
}