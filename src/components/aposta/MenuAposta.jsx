import './menuaposta.css'

export default function Aposta(){

    return(
        <div className="menu-aposta" >
            <div className="valor-aposta">
                <input id="quantia-apostar" defaultValue={'Quantia'} style={{backgroundColor: 'black'}} type="text" />
                <button id="divide" >1/2</button>
                <button id="multiplica">2x</button>
            </div>
            <h2>Selecionar Cor</h2>
            <div className="selecionar-cor">
                <button style={{backgroundColor: 'red'}} className="quadros-option">x2</button>
                <button style={{backgroundColor: 'white', color: 'red'}} className="quadros-option">x14</button>
                <button style={{backgroundColor: 'black'}} className="quadros-option">x2</button>
            </div>

            <button onClick={()=> alert('clicou')} className='comecar-jogo' >
                Começar jogo
            </button  >
        </div>
    )
}