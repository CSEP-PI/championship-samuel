import api from "./api";

export async function getTimes(setData){
    try {
        const response = await api.get('/times/')
        console.log('Times: ', response.data)
        setData(response.data)
    } catch (error) {
        console.log('Erro ao buscar times: ', error.message)
    }
}