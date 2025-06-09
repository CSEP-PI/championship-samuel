import api from "./api";

export async function getCampeonatos(setData) {
    try {
        const response = await api.get('/campeonatos/')
        console.log(response.data)
        setData(response.data)
    } catch (error) {
        console.log('Erro ao buscar campeoanatos: ', error.message)
    }
}

export async function getCampeonato(setData, id) {
    try {
        const response = await api.get(`/campeonatos/${id}/`)
        console.log(response.data)
        setData(response.data)
    } catch (error) {
        console.log('Erro ao buscar campeoanato: ', error.message)
    }
}


export async function getTabela(setData) {
    try {
        const response = await api.get('/tabela/')
        console.log('TABELA: ', response.data.tabela)
        setData(response.data.tabela)
    } catch (error) {
        console.log('Erro ao buscar tabela: ', error.message)
    }
}

export async function postCampeonato(nome, setModal) {
    try {
        const response = await api.post('/campeonatos/', {
            nome: nome
        })
        setModal(false)
        console.log('Sucesso ao adicionar campeonato: ', response.data)
    } catch (error) {
        console.log('Erro ao adicionar campeonato: ', error.message)
    }
}

