import api from "./api";

export async function getPartidas(saveData){
    try {
        const response = await api.get('/partidas/')
        console.log('PARTIDAS: ', response.data)
        saveData(response.data)
    } catch (error) {
        console.log('Erro ao buscar partidas: ', error.message)
    }
}