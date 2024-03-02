
import './TitleTypeTwo.css'

import victor from '../../assets/victor.png'


export default function TitleTypeTwo({ClassName,Title,TitleTop}){
    return(
        <div className={`titleTypeTwo ${ClassName}`}>
           <h2>{Title}</h2>
        </div>
    )
}