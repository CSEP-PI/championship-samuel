import api from "./api";

export async function getEstadios(setData){
    try {
        const response = await api.get('/estadios/')
        console.log('ESTADIOS: ', response.data)
        setData(response.data)
    } catch (error) {
        console.log("Erro ao pegar jogadores: ", error.message)
    }
}