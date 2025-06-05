import styles from './CardTime.module.css'


export default function CardTime({nome}) {
    return (
        <div className={styles.container}>
            <div className={styles.imgTime}></div>
            <h1>{nome}</h1>
            <button>Ver mais</button>
        </div>
    )
}