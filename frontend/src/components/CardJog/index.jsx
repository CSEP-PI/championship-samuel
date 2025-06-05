import styles from './CardJog.module.css'


export default function CardJog({nome}) {
    return (
        <div className={styles.container}>
            <div className={styles.imgJogador}></div>
            <h1>{nome}</h1>
            <button>Ver mais</button>
        </div>
    )
}