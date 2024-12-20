import './itemNavbar.css';

interface PropsItemNavbar{
    ImgPath: string;
    Text: string;
    TargetId: string;
}

export default function ItemNavbar({ImgPath, Text, TargetId}: PropsItemNavbar){
    
    const handleClick = () => {
        const targetElement = document.getElementById(TargetId);
        if(targetElement){
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }
    
    return(
        <div className='caixaItem' onClick={handleClick}>
            <img className='imgNav' alt="" src={ImgPath}/>
            <text className='textNav'>{Text}</text>
        </div>
    )
}