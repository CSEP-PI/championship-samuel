import styles from './Tabela.module.css'

export default function Tabela({ tabela }) {
    const newTable = []

    Object.entries(tabela).forEach(([chave, valor]) => {
        newTable.push(valor)
    })


    return (
        <>
            <table>
                <tr className={styles.colunaHeader}>
                    <th className={styles.bordaL}>Time</th>
                    <th>Pts</th>
                    <th>PJ</th>
                    <th>VIT</th>
                    <th>E</th>
                    <th>DER</th>
                    <th>GM</th>
                    <th>GS</th>
                    <th className={styles.bordaR}>SG</th>
                </tr>

                {
                    newTable.map((item, index) =>
                        <tr key={index}>
                            <td>{item.time}</td>
                            <td>{item.pontos}</td>
                            <td>{item.qtd_jogos}</td>
                            <td>{item.vitorias}</td>
                            <td>{item.empates}</td>
                            <td>{item.derrotas}</td>
                            <td>{item.gols}</td>
                            <td>{item.gols_s}</td>
                            <td>{item.saldo}</td>
                        </tr>
                    )
                }




            </table>
        </>
    )
}