import './menuaposta.css'

export default function Aposta(){

    return(
        <div className="menu-aposta" >
            <div className="valor-aposta">
                <input id="quantia-apostar" defaultValue={'Quantia'} type="text" />
                <button id="divide" >1/2</button>
                <button id="multiplica">2x</button>
            </div>
            Selecionar Cor
            <div className="selecionar-cor">
                <button style={{backgroundColor: 'red'}} className="quadros-option">x2</button>
                <button style={{backgroundColor: 'white', color: 'red'}} className="quadros-option">x14</button>
                <button style={{backgroundColor: 'black'}} className="quadros-option">x2</button>
            </div>

            <button className='comecar-jogo' >
                Começar jogo
            </button  >
        </div>
    )
}