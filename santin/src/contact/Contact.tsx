import './contact.css';
import Message from './assets/Message.svg';
import WhatsappLogo from './assets/WhatsappLogo.svg';

export default function Contact(){
    return(
        <div id="contato" className='DefBox'>
            <img className='MessageIcon' alt='' src={Message}/>
            <div className='CaixinhaContat'>
                <text className='Contat'>Contato</text>
                <text className='ContatText'>Entre em contanto conosco e faça seu orçamento</text>
                <div className='Bar'/>
            </div>
            <div className='CaixaCont'>
                <a target='_blank' className='tagA' href=' https://bit.ly/4g9dt3z?fbclid=PAZXh0bgNhZW0CMTEAAaafbX8ny1dLq35rDzxc09iVUdYpt9CjPHHlkEyQd0tFdVt6WRc6aga_xe8_aem_s-FxJVb-aWylTYWQmuhQBQ.'>
                    <div className='Botao'>
                        <img className='Tel' alt='' src={WhatsappLogo} />
                        <div className='CaixaNome'>
                            <text className='Name'>(46) 9 9900.6796</text>
                            <text className='Nome'>Marcos Santin</text>
                        </div>
                    </div>
                </a>
                <a target='_blank' className='tagA' href='https://bit.ly/49xwJVS?fbclid=PAZXh0bgNhZW0CMTEAAaarSe3vYx_APlOFZNTzRe4YRzdAgGuvfYyeVY-dMTxx2h3cqRJBfCIGUng_aem_zOAGdi8tm8JfVtHczbj6WQ.'>
                    <div className='Botao'>
                        <img className='Tel' alt='' src={WhatsappLogo} />
                        <div className='CaixaNome'>
                            <text className='Name'>(49) 9 9809.5697</text>
                            <text className='Nome'>Tatiano Santin</text>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}