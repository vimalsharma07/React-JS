
import './card.css';
export default function Card({color, text}){
    return(
        <div  className='container'>
            <div className='first'  style={{backgroundColor:color}}>
            </div>
            <div className='second'>
             <h2>  {color}</h2> 
              <h4  style={{color: color}}>{text}</h4> 
            </div>


        </div>
    )
}

