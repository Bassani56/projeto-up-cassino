// import Header from "../components/home/Header"
import './menu.css'
import Register from "../components/home/modal/Register"
import Header from "../components/home/Header"
import ErrorBoundary from "../ErrorBoundary"
import { useEffect, useState } from "react"
import { CurrentContext } from "../context/themeContext"
import  logo from '../components/img/bolso-lula.jpg'
import Span from "../components/home/modal/spans/Spans"
import { useNavigate } from "react-router-dom"
export default function MenuRegistro(){
    const [showModelRegister, setShowModelRegister] = useState(false);
    const [showSpan, setShowSpan] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        // Define o temporizador
        const timer = setTimeout(() => {
            setShowSpan(true)
        }, 2200); // 3000 milissegundos = 3 segundos

        // Limpeza do temporizador
        return () => clearTimeout(timer);
    }, []);

    return(
        <CurrentContext.Provider value={{showSpan, setShowSpan, showModelRegister, setShowModelRegister }}>
            <ErrorBoundary>
                <div id='bonus'>Inscreva-se e receba bônus de até R$ 1000! 🇧🇷</div>
                <Header>
                    <button id="button-entrar" className="button">Entrar</button>
                    <button id="button-cadastrar" className="button" onClick={() => {setShowModelRegister(true)}}>Cadastre-se</button>
                </Header> 
                <div className="app-dash">
                    <Span></Span>
                    <h1 id="titulo" className="text">Bem vindos ao Bolazula</h1>
                    <img id="bolsolula" src={logo} alt="BolsoLula"/>
                    <div className="sub-context">
                        <div className="square-context">
                            <h1 id="subtitulo" className="text">Cassino</h1>
                            <p className="text">Aproveite seus últimos momentos com seu dinheiro, pois agora não os terá mais.</p>
                            <button id="button-go-cassino" className="button" onClick={() => {navigate("/dashboard")}}>Ir ao Cassino</button>
                        </div>
                        <div className="square-context">
                            <h1 id="subtitulo" className="text">Sobre Nós</h1>
                            <p className="text">Lorem icorporis repellat harum vero, adipisci quam ipsum! Rerum, nesciunt ducimus!</p>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button id="button-go-other" className="button">Clica em mim &gt;///&lt;</button></a>
                        </div>
                    </div>
                    <Register/>
                </div>
            </ErrorBoundary>
        </CurrentContext.Provider>
        

    )
}