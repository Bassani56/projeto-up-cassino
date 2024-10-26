import './index.css'
import { CurrentContext } from '../../../context/themeContext'
import { useContext, useState } from 'react'
import LogoMensagem from '../../img/logoMensagem.jpg'
import Escolha from '../../img/antesEscolha.jpg'
import Proteger from '../../img/deus-proteja-bolsonabo.jpg'
import Urgente from '../../img/urgente-bolsonabo.jpg'
import { useNavigate } from 'react-router-dom'
export default function Register(){
    const {setShowModelRegister, showModelRegister} = useContext(CurrentContext)
    
    const [selectedPet, setSelectedPet] = useState('');

    const handleSelectChange = (event) => {
        setSelectedPet(event.target.value);
    };
    
    const navigate = useNavigate()

    if(showModelRegister){
        return(
            <div className="modal-overlay-register">
                <button onClick={() => {setShowModelRegister(false)}}>Fechar</button>

                <div className="modal-content-register mensagem">
                    <h2>AVISO!</h2>
                    <p>Voce tem certeza disso?</p>
                    <img src={LogoMensagem} alt="" />
                    <p>Voce foi avisado</p>
                </div>

                <div className="modal-content-register cadastro">
                    <h2><strong>Bolazula</strong></h2>
                    <p>Cadastre-se na Bolazula</p>
                    <input type="text" placeholder={'Endereço de Email'} />
                    <input type="text" placeholder={'Senha'} />
                    <select 
                        name="client" 
                        onChange={handleSelectChange} 
                        value={selectedPet} 
                        className="select-client-dropdown"
                    >
                        <option value="">Selecione um pet</option>
                        <option value="lule">Lule</option>
                        <option value="bolsonabo">Bolsonabo</option>
                        <option value="nenhum">Deus é mais...</option>
                    </select>

                    <div className='foto' >

                        {
                            selectedPet === 'bolsonabo' && <img src={Proteger} alt="" />
                            
                        }
                        {
                            selectedPet === 'lule' && <img src={Urgente} alt="" />
                        }
                        {selectedPet.length < 1 ? (
                            <img src={Escolha} alt="" />
                        ) : (
                            <button onClick={() => {navigate("/dashboard")}} >Comece já</button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    return null
}