import SideBar from "../../components/SideBar"
import styles from './Campeonatos.module.css'
import CardCamp from "../../components/CardCamp"
import { FaTrophy } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import { getCampeonatos } from "../../services/campeonato";

export default function Campeonato() {
    const navigate = useNavigate()
    const [campeonatos, setCampeonatos] = useState([])

    useEffect(() => {
        getCampeonatos(setCampeonatos)
    }, [])

    return(
        <div className={styles.container}>
            <SideBar/>

            <main>
                <header>
                    <h1>Campeonatos</h1>

                    <button onClick={() => navigate('/times')}>
                        <IoMdAdd/>
                        <FaTrophy/>
                    </button>
                </header>

                <section className={styles.areaCards}>
                    
                    {campeonatos.map((item) =>
                        <CardCamp key={item.id} nome={item.nome}/>
                    )}
                </section>
            </main>
        </div>
    )
}