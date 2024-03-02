import './PopularBooks.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

import { galleryData } from '../../Data/Data'

export default function Popularbooks(){    
        const filterItems = activeButton === 'all'? galleryData:galleryData.
        filter((item)=>item.category === activeButton);
    

    return(
        <section>
        <div className="container popularbooks-container">
            <TitleTypeOne TitleTop={'Some quality items'} Title={'Popular Books'} className={'popularBooks-title'}/>

            <div className="filter-buttons">
                <button>
                    All
                </button>
                <button>
                    Business
                </button>
                <button>
                    Technology
                </button>
                <button>
                    Adventure
                </button>
                <button>
                    Romantic
                </button>
                <button>
                    Fictional
                </button>

            </div>
            <div className="gallery">
                {filterItems.map(({name,writer,price,image},index)=>{
                    return(
                        <div className="gallery-item" key={index}>
                            <div className="popularbook-image">
                                <img src={image} alt="" />
                            </div>
                            <div className='popularbook-info'>
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    
        </section>
    )    
}
