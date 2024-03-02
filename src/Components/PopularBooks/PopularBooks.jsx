import './PopularBooks.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

export default function Popularbooks(){
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


        </div>
    
        </section>
    )    
}
