import './boasvindas.css'
import  logo from '../components/img/bolso-lula.jpg'
export default function BoasVindas(){

    return(
        <div className="bem-vindo" >
            <h1>Bem vindos ao <strong>Bolazula</strong></h1>
            <img src={logo}/>
        </div>
    )
}