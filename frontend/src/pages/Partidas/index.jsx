import styles from './Partidas.module.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import CardTime from '../../components/CardTime'
import { FaShield } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import { getTimes } from '../../services/time';

export default function Partidas() {

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
                    
                </section>
            </main>
        </div>
    )
}