import styles from './Jogadores.module.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import CardJog from '../../components/CardJog';
import { FaUsers } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect, use } from 'react';
import { getJogadores } from '../../services/jogadores';

export default function Jogadores() {
    const [jogadores, setJogadores] = useState([])

    useEffect(() => {
        getJogadores(setJogadores)
    }, [])

    return (
        <div className={styles.container}>
            <SideBar />

            <main>
                <header>
                    <h1>Jogadores</h1>


                    <button>
                        <IoMdAdd />
                        <FaUsers />
                    </button>

                </header>

                <section className={styles.areaCards}>
                    
                    {jogadores.map((item) =>
                        <CardJog key={item.id} nome={item.nome}/>
                    )}
                </section>
            </main>
        </div>
    )
}