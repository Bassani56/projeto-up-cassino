// import Header from "../components/home/Header"
import BoasVindas from "../components/BoasVindas"
import './menu.css'
import Register from "../components/home/modal/Register"
import Header from "../components/home/Header"
import ErrorBoundary from "../ErrorBoundary"
import { useState } from "react"
import { CurrentContext } from "../context/themeContext"
export default function MenuRegistro(){
    const [showModelRegister, setShowModelRegister] = useState(false);

    return(
        <CurrentContext.Provider value={{ showModelRegister, setShowModelRegister }}>
            <ErrorBoundary>
                    <Header>
                        <button id="button-entrar">Entrar</button>
                        <button onClick={() => {setShowModelRegister(true)}} id="button-cadastrar">Cadastre-se</button>
                    </Header> 
                    
                <div className="app-dash" >
                    
                    <BoasVindas/> 
                    <Register/> 
                </div>
            </ErrorBoundary>
        </CurrentContext.Provider>
        

    )
}