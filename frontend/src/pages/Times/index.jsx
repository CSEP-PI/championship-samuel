import styles from './Times.module.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import CardTime from '../../components/CardTime'
import { FaShield } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect, useRef } from 'react';
import { getTimes, postTimes } from '../../services/time';
import { getCampeonatos } from '../../services/campeonato';


export default function Times() {
    const [times, setTimes] = useState([])
    const [campeanatos, setCampeoantos] = useState([])
    const [modalTime, setModalTime] = useState(false)
    const [modalEdicao, setModalEdicao] = useState(false)

    const nomeTime = useRef()

    useEffect(() => {
        getTimes(setTimes)
    }, [])

    useEffect(() => {
        getTimes(setTimes)
    }, [modalTime])

    useEffect(() => {
        getCampeonatos(setCampeoantos)
    }, [modalTime])

    return (
        <div className={styles.container}>
            <SideBar />

            <main>
                <header>
                    <h1>Times</h1>

                    <div>
                        <button className={styles.addEdicao}>
                            Adicioanar edição
                        </button>
                        <button onClick={() => setModalTime(!modalTime)}>
                            <IoMdAdd />
                            <FaShield />
                        </button>
                    </div>
                </header>

                <section className={styles.areaCards}>

                    {times.map((item) =>
                        <CardTime key={item.id} nome={item.nome} />
                    )}
                </section>
            </main>

            {modalTime && (
                <div id="modal">
                    <div id="modal-area">
                        <h1>Adicione um time</h1>

                        <div id="area-input">
                            <label htmlFor="nome">Nome do time</label>
                            <input type="text" id="nome" ref={nomeTime} />
                        </div>

                        <div id="modal-btns">
                            <button onClick={() => postTimes(nomeTime.current?.value, setModalTime)}>Adicionar</button>
                            <button id="red" onClick={() => setModalTime(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            {modalEdicao && (
                <div id="modal">
                    <div id="modal-area">
                        <h1>Adicione uma edição</h1>

                        <div id="area-input">
                            <label htmlFor="ano">Ano</label>
                            <input type="number" id="ano" ref={nomeTime} maxLength={4} placeholder='Ex: 2015'/>

                            <label htmlFor="camp">Campeonato referente</label>
                            <select name="" id="camp">
                                {campeanatos.map((item) => 
                                    <option value={item.id} key={item.id}>{item.nome}</option>
                                )}
                            </select>

                            <label htmlFor="time">Time referente</label>
                            <select name="" id="time">
                                {times.map((item) => 
                                    <option value={item.id} key={item.id}>{item.nome}</option>
                                )}
                            </select>
                        </div>

                        <div id="modal-btns">
                            <button onClick={() => postTimes(nomeTime.current?.value, setModalTime)}>Adicionar</button>
                            <button id="red" onClick={() => setModalTime(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )
            }

            

        </div>
    )
}