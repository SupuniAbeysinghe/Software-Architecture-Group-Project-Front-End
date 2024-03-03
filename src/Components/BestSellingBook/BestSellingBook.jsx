//import best selling book css

import './BestSellingBook.css'

import TitleTypeTwo from '../../UI/TitleTypeTwo/TypeTypeTwo'

// //import tree shape
// import TreeShape from '../../assets/treeShape.png'

import { sellingBooksData } from '../../Data/Data'

import { Link } from 'react-router-dom'

import { BsArrowRight } from "react-icons/bs";


export default function BestSellingBook(){
    return(
        <section className='BestSellingBook'>
            {/*selling book tree */}
            {/* <div className='treeshape'>
                <img src={TreeShape} alt="" />
            </div> */}
{/*selling book content */}            
               { sellingBooksData.map(({img,infoTitle,infoTitleTop,desc,price,shopbtnLink})=>{
                return(
                <div className='container bestselling-container'>
                    <div className="sellling-book-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="selling-book-right">
                    <TitleTypeTwo Title={'Best selling book'}
                    className="SellingBookTitle"/>
                    <div><small>{infoTitleTop}</small></div>
                    <h3>{infoTitle}</h3>
                    <p>{desc}</p>
                    <h5><span>{price}</span></h5>
                    <Link to={shopbtnLink} className='btn'>
                        <small>Shop it now</small>
                        <BsArrowRight />

                    </Link>
                    </div>
                </div>
                )

                })
                }
                
            
        </section>
    )
}