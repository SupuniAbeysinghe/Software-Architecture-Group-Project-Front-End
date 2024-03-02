
import './FeaturedBooks.css'

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'

// Import Swiper React components Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import{Pagination} from 'swiper/modules';

import { featuredBooksData } from '../../Data/Data';

export default function FeaturedBooks(){
    return(
        <div className='container featured-book-container'>
            {/*title props */}
            <TitleTypeOne TitleTop={'Some Quality items'} Title={'Featured Books'}/>
            {/*featured books slider */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                modules={[Pagination]}
                pagination={{ el: ".swiper-pagination", clickable: true }}>
                {
                    featuredBooksData.map(({}))
                } 
            </Swiper>
        </div>
    )
}