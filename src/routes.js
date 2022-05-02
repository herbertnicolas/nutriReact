import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./pages/Header"
import Home from './pages/Home'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;