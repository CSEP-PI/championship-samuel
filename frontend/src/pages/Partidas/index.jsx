import styles from './Partidas.module.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { useState, useEffect } from 'react';
import CardPartida from '../../components/cardPartida';
import { getPartidas } from '../../services/partida';

export default function Partidas() {
    const [partidas, setPartidas] = useState([])

    useEffect(() => {
        getPartidas(setPartidas)
    }, [])

    return (
        <div className={styles.container}>
            <SideBar />

            <main>
                <h1>Partidas</h1>


                <div className={styles.areaBtn}>
                    <button>
                        Adicionar partida
                    </button>
                </div>

                <section className={styles.areaCards}>
                    
                    {partidas.map((item) =>
                        <CardPartida
                        data={item.data} 
                        timeV={item.timem_nome}
                        timeM={item.timev_nome}
                        placarV={item.placar_visitante}
                        placarM={item.placar_mandante}
                        />
                    )}
                </section>
            </main>
        </div>
    )
}