import style from './Cross.module.scss';

export const Cross = () => {
    return (
        <div className={style.cross}>
            <div className={style.firstLine}></div>
            <div className={style.secondLine}></div>
        </div>
    )
}