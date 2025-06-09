import SideBar from "../../components/SideBar"
import styles from './Campeonatos.module.css'
import CardCamp from "../../components/CardCamp"
import { FaTrophy } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
import { getCampeonatos, postCampeonato } from "../../services/campeonato";


export default function Campeonato() {
    const navigate = useNavigate()
    const [campeonatos, setCampeonatos] = useState([])
    const [modal, setModal] = useState(false)

    const nomeCamp = useRef()

    useEffect(() => {
        getCampeonatos(setCampeonatos)
    }, [])

    useEffect(() => {
        getCampeonatos(setCampeonatos)
    }, [modal])

    return (
        <div className={styles.container}>
            <SideBar />

            <main>
                <header>
                    <h1>Campeonatos</h1>

                    <button onClick={() => setModal(!modal)}>
                        <IoMdAdd />
                        <FaTrophy />
                    </button>
                </header>

                <section className={styles.areaCards}>

                    {campeonatos.map((item) =>
                        <CardCamp key={item.id} camp={item.id} nome={item.nome} />
                    )}
                </section>
            </main>

            {modal && (
                <div className={styles.modalContainer} id="modal">
                    <div className={styles.modalArea} id="modal-area">
                        <h1>Adicione um campeonato</h1>

                        <div id="area-input">
                            <label htmlFor="nome">Nome do campeanato</label>
                            <input type="text" id="nome" ref={nomeCamp}/>
                        </div>

                        <div id="modal-btns">
                            <button onClick={() => postCampeonato(nomeCamp.current?.value, setModal)}>Adicionar</button>
                            <button id="red" onClick={() => setModal(!modal)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}