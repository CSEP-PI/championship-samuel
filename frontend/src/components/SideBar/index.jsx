import styles from './SideBar.module.css'
import { FaTrophy } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdStadium } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.areaLogo}>
                <div className={styles.logo}></div>
            </div>

            <section className={styles.areaNav}>
                <ul>
                    <li onClick={() => navigate('/')}>
                        <FaTrophy/>
                        Campeoanatos
                    </li>
                    <li onClick={() => navigate('/times')}>
                        <FaShield/>
                        Times
                    </li>
                    <li onClick={() => navigate('/jogadores')}>
                        <FaUsers/>
                        Jogadores
                    </li>
                    <li onClick={() => navigate('/estadios')}>
                        <MdStadium/>
                        Estádios
                    </li>
                </ul>
            </section>
        </div>
    )

}