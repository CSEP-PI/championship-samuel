import styles from './CardEst.module.css'


export default function CardEstd({nome}) {
    return (
        <div className={styles.container}>
            <div className={styles.imgEstd}></div>
            <h1>{nome}</h1>
            <button>Ver mais</button>
        </div>
    )
}