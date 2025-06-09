import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Campeonato from '../pages/Campeonatos'
import Times from '../pages/Times'
import Jogadores from '../pages/Jogadores'
import Estadios from '../pages/Estadios'
import DetalhesCamp from '../pages/DetalhesCamp'
import Partidas from '../pages/Partidas'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Campeonato/>}/>
                <Route path='/times' element={<Times/>}/>
                <Route path='/jogadores' element={<Jogadores/>}/>
                <Route path='/estadios' element={<Estadios/>}/>
                <Route path='/detalhes-campeonato/:result' element={<DetalhesCamp/>}/>
                <Route path='/detalhes-campeonato/partidas/' element={<Partidas/>}/>
            </Routes>
        </BrowserRouter>
    )
}