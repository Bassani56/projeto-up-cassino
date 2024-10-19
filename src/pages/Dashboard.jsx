import './dash.css'
import Carousel from '../components/carousel/Carousel'
import { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import Aposta from '../components/aposta/MenuAposta';
export default function Dashboards(){

    const [width, setWidth] = useState(690); // largura inicial

    useEffect(() => {
        const interval = setInterval(() => {
            setWidth(prevWidth => {
                // Diminui a largura em 5px, ou qualquer valor que você escolher
                const newWidth = prevWidth - 5; 
                return newWidth > 0 ? newWidth : 0; // impede que a largura fique negativa
            });
        }, 77); // ajusta o intervalo de tempo conforme necessário
    
        return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
    }, []);

    return(
       <>
            <Header>
                <div className='value'>R$-dinheiro</div>
                <button className='depositar' >Depositar</button>
                <button className='logout'>Logout</button>
            </Header>

            <div className="overlay-double" >
                
                {/* <h1>Bem vindos ao <strong>Bolazula</strong></h1> */}
                <div className='content-double'>
                    <div className='left'>
                        <Aposta/>

                    </div>
                    <div className='right'>
                        <div className='up'>
                            <div className='espera' >
                                <div className='tempo' style={{ width: `${width}px` }}>tempo</div>
                            </div>
                            <Carousel/>
                            <div className='traco'></div>
                        </div>
                        <div className='down'>DOWN</div>
                    </div>
                </div>
            </div>
       </>
    )
}