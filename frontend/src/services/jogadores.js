import api from "./api";

export async function getJogadores(setData){
    try {
        const response = await api.get('/jogadores/')
        console.log('JOGADORES: ', response.data)
        setData(response.data)
    } catch (error) {
        console.log("Erro ao pegar jogadores: ", error.message)
    }
}