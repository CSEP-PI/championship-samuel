import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Campeonato from '../pages/Campeonatos'
import Times from '../pages/Times'
import Jogadores from '../pages/Jogadores'
import Estadios from '../pages/Estadios'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Campeonato/>}/>
                <Route path='/times' element={<Times/>}/>
                <Route path='/jogadores' element={<Jogadores/>}/>
                <Route path='/estadios' element={<Estadios/>}/>
            </Routes>
        </BrowserRouter>
    )
}