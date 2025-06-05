import styles from './Times.module.css'
import {useNavigate} from 'react-router-dom'
import SideBar from '../../components/SideBar'
import CardTime from '../../components/CardTime'
import { FaShield } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import { getTimes } from '../../services/time';

export default function Times() {
    const [times, setTimes] = useState([])

    useEffect(() => {
        getTimes(setTimes)
    }, [])

    return(
        <div className={styles.container}>
            <SideBar/>

            <main>
                <header>
                    <h1>Times</h1>

                    <div>
                        <button className={styles.addEdicao}>
                            Adicioanar edição
                        </button>
                        <button>
                            <IoMdAdd/>
                            <FaShield/>
                        </button>
                    </div>
                </header>

                <section className={styles.areaCards}>
                    
                    {times.map((item) => 
                        <CardTime key={item.id} nome={item.nome}/>
                    )}
                </section>
            </main>
        </div>
    )
}