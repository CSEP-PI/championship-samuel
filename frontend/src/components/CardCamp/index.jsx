import styles from './CardCamp.module.css'


export default function CardCamp({nome}) {
    return (
        <div className={styles.container}>
            <div className={styles.imgCamp}></div>
            <h1>{nome}</h1>
            <p>Descrição simples do campeonato</p>
            <button>Ver mais</button>
        </div>
    )
}