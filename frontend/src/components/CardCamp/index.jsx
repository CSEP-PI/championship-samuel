import styles from './CardCamp.module.css'
import { useNavigate } from 'react-router-dom'


export default function CardCamp({nome, camp}) {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.imgCamp}></div>
            <h1>{nome}</h1>
            <p>Descrição simples do campeonato</p>
            <button onClick={() => navigate(`detalhes-campeonato/${camp}`)}>Ver mais</button>
        </div>
    )
}