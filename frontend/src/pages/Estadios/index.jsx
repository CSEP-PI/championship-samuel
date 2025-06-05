import styles from './Estadios.module.css'
import {useNavigate} from 'react-router-dom'
import SideBar from '../../components/SideBar'
import CardEstd from '../../components/CardEstadio';
import { MdStadium } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from 'react';
import { getEstadios } from '../../services/estadio';

export default function Estadios() {
    const [estadios, setEstadios] = useState([])

    useEffect(() => {
        getEstadios(setEstadios)
    }, [])

    return(
        <div className={styles.container}>
            <SideBar/>

            <main>
                <header>
                    <h1>Estádios</h1>

                    <div>
                        <button className={styles.addEdicao}>
                            Adicioanar endereço
                        </button>
                        <button>
                            <IoMdAdd/>
                            <MdStadium/>
                        </button>
                    </div>
                </header>

                <section className={styles.areaCards}>
                    
                    {estadios.map((item) => 
                        <CardEstd key={item.id} nome={item.nome}/>
                    )}
                    
                </section>
            </main>
        </div>
    )
}