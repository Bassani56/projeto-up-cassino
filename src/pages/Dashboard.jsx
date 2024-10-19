import './dash.css'
import Carousel from '../components/carousel/Carousel'
import { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import Aposta from '../components/aposta/MenuAposta';
import useSound from 'use-sound';
import audio from '../components/audio/audio-bolso.mp3'
export default function Dashboards(){

    const [width, setWidth] = useState(690); // largura inicial
    // const [playSound, { stop }] = useSound(audio, {
    //     // Defina os tempos de início e fim (em segundos)
    //     playbackRate: 1,  // Ajusta a velocidade de reprodução, se necessário
    //     sprite: {
    //         shortClip: [5000, 40000], // Começa em 5 segundos e toca por 3 segundos (5000ms a 8000ms)
    //     },
    // });

    // useEffect(() => {
    //     playSound({ id: 'shortClip' }); // Reproduz o trecho definido no sprite
    //     return () => {
    //         stop(); // Para o áudio ao desmontar o componente
    //     };
    // }, [playSound, stop]);

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
       <div className='dashboard' >
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
                            <div className='container-tempo' >
                                <div className='espera' >
                                    <div className='tempo' style={{ width: `${width}px` }}>tempo</div>
                                </div>
                            </div>
                            <Carousel/>
                            <div className='traco'></div>
                        </div>
                        <div className='down'></div>
                    </div>
                </div>
            </div>

            <div className="overlay-double">
                <div className="historico-container">
                    <h1>AQUI VAI SER O HISTÓRICO DE JOGO</h1>
                    <div className="historico-components-wrapper">
                        <div className="historico-component">Vitória 2X</div>
                        <div className="historico-component">Vitória 14X</div>
                        <div className="historico-component">Vitória 2X</div>
                    </div>
                </div>
            </div>

       </div>
    )
}