import './services.css';
import Snow from './assets/limpa-neve.svg';
import Budge from './componentes/Budge';
import Concrete from './assets/concrete.svg'
import Excavation from './assets/excavation.svg';
import EarthMoving from './assets/earthmoving.svg';

export default function Services(){
    return(
        <div id="servicos" className='Box'>
            <img className='Snow' alt='' src={Snow}/>
            <div className='Expl'>
                <text className='Tit'>Isto é o que podemos fazer por você!</text>
                <text className='desc'>Caso haja outros serviços além dos listados entre em contato conosco para fazer um orçamento</text>
                <div className='Trac'></div>
            </div>
            <div className='Comp'>
            <Budge imagePath={Excavation} description='Serviços de terraplanegem, drenagens, demolições, escavações, limpeza de terreno, estabilização de encostas, remoção de entulho, entre outros serviços' title='Alguns de nossos serviços'  />
            <Budge imagePath={Concrete} description='Fazemos transportes e vendas de materiais como aterro, barro, brita, areia para aterro, entulho, pedras, entre outros de acordo com suas necessidades' title='Transporte e venda de materias'  />
            <Budge imagePath={EarthMoving} description='Alugamos escavadeiras, mini-escavadeiras, BobCats, caminhões basculante, retroescavadeiras e outros' title='Aluguel de equipamentos'  />
            </div>
        </div>
    )
}