import ItemNavbar from './components/ItemNavbar';
import './navbar.css';
import General from './assets/general.svg';
import Carpenter from './assets/carpenter.svg';
import bores from './assets/bores.svg';
import surveyors from './assets/surveyors.svg';

export default function Navbar(){
    return(
        <div className='navbarBox'>
                <div>
                    <ItemNavbar TargetId='inicio' ImgPath={General} Text='Santin Terraplanagem'/>
                </div>
                <div className='Setores'>
                    <ItemNavbar TargetId='sobre' ImgPath={surveyors} Text='Sobre'/>
                    <ItemNavbar TargetId='servicos' ImgPath={Carpenter} Text='Serviços'/>
                    <ItemNavbar TargetId='contato' ImgPath={bores} Text='Contato'/>
                </div>
        </div>
    )
}