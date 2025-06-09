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

export async function postTimes(nome, setModal){
    try {
        const response = await api.post('/times/', {
            nome: nome
        })
        console.log('Sucesso ao adicionar time: ', response.data)
        setModal(false)
    } catch (error) {
        console.log('Erro ao adicionar time: ', error.message)
    }
}