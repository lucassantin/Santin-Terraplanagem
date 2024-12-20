import './About.css';
import ImgEsc from './assets/aboutEscavadeira.jpg';
export default function About(){
    return(
        <div id="sobre" className="box">
            <div className='Text'>
                <text className='Title'>
                    Sobre
                </text>
                <text className='Texto'>
                    Empresa do setor de terraplangem presente no mercado desde 2024 em Barração, Paraná, fundada por Marcos e Tatiano Santin.
                    <br/><br/>Uma empresa com ampla experiência em serviços de terraplanagem, prestando serviços para diversos setores como industrias, comercios, particulares, locaões de equipamentos, entre outros.<br/><br/> Seu objetivo é a qualidade e agilidade no atendimento de seus clientes, aliados a melhores preços e prazos, dispondo de uma equipe esperiente.
                </text>
            </div>
            <img className='EscavadeiraSobre' src={ImgEsc} alt=''/>
        </div>
    )
}