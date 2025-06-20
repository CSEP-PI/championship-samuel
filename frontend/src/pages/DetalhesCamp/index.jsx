import styles from './Detalhes.module.css'
import {useNavigate} from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { useState, useEffect } from 'react';
import Tabela from '../../components/Tabela';
import { getCampeonato, getTabela } from '../../services/campeonato';
import { useParams } from 'react-router-dom';


export default function DetalhesCamp() {
    const navigate = useNavigate()
    const [tabela, setTabela] = useState([])
    const [campeanato, setCampeoanto] =useState([])
    const {result} = useParams()

    useEffect(() => {
        getTabela(setTabela)
        getCampeonato(setCampeoanto, result)
    }, [])

    

    return(
        <div className={styles.container}>
            <SideBar/>

            <main className={styles.main}>
                <section className={styles.sectionInfo}>
                    <div className={styles.img}>

                    </div>

                    <h1>{campeanato.nome}</h1>
                    <p>Descrição simples do campeonato</p>    
                </section>

                <section className={styles.sectionTabela}>
                    <header>
                        <h1>Tabela de classificação - 2025</h1>
                        <button onClick={() => navigate('/detalhes-campeonato/partidas/')}>Ver partidas</button>
                    </header>

                    <div>
                        <h2>Edição:</h2>
                        <select>
                            <option value="2025">2025</option>
                        </select>
                        <button>Filtrar</button>
                        <h2></h2>
                    </div>
                    
                    

                    <Tabela tabela={tabela}/>
                </section>
            </main>
        </div>
    )
}