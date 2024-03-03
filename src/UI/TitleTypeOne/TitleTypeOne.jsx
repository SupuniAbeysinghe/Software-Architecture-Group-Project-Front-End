
import './TitleTypeOne.css'


export default function TitleTypeOne({ClassName,Title,TitleTop}){
    return(
        <div className={`titleTypeOne ${ClassName}`}>
            <small>{TitleTop}</small>
            <div className='heading-H'>
                <div className='line'>               
                </div>
                <h2>{Title}</h2>
                <div className='line'></div>
            </div>
        </div>
    )
}