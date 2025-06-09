import imgTime from '../../assets/escudo-base.png'
import styles from './CardP.module.css'
import {format} from 'date-fns'

export default function CardPartida({data, timeV, timeM, placarV, placarM}) {
    const data_formatada = format(data, "dd/MM/yyyy")

    return (
        <div className={styles.partida}>
            <div className={styles.time}>
                <img src={imgTime} alt="escudo" />
                <h2>{timeM}</h2>
            </div>

            <div className={styles.areaPlacar}>
                <div>
                    <p>{placarM}</p>
                    <p>x</p>
                    <p>{placarV}</p>
                </div>
                <h2>{data_formatada}</h2>
            </div>

            <div className={styles.time}>
                <img src={imgTime} alt="escudo" />
                <h2>{timeV}</h2>
            </div>
        </div>
    )
}