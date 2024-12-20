import './budge.css';

interface inforCardProps {
    imagePath: string;
    title: string;
    description: string;
}

export default function Budge({ imagePath, title, description}: inforCardProps){
    return(
        <div className='Items'>
            <img className='Icon' alt='' src={imagePath} />
            <text className='titlePrinc'>{title}</text>
            <text className='Drescri'>{description}</text>
        </div>
    )
}