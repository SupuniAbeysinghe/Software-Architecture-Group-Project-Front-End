import'./Header.css'

import { headerBooks } from '../../Data/Data'

// Import Swiper React components Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import{Navigation,Pagination} from 'swiper/modules';


//react aroe icon
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

//shape svg immport
import headerShape from '../../assets/header-shape.svg'



export default function Header(){
    return(
        <header>
            <div className="header-container">
            {/*Import Swiper React components Swiper styles*/}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Pagination]}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    prevEl: ".button-prev-slide",
                    nextEl: ".button-next-slide"
                }}
            >

                {
                    headerBooks.map(({title,info,img,btnLink},index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className='header-wrapper container'>
                                {/*header left */}
                                <div className="header-left">
                                    <h1>{title}</h1>
                                    <p dangerouslySetInnerHTML={{__html:info}}></p>
                                    <a href={btnLink} className="btn btn-border">Learn More</a>
                                </div>
                                {/*header right */}
                                <div className="header-right">
                                    <img src={img} alt="" />
                                </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
                {/*header pagination */}
                <div className="slider-button">
                    <div className='button-prev-slide slidebutton'><GoArrowLeft /></div>
                    <div className='button-next-slide slidebutton'><GoArrowRight /></div>

                </div>
                {/*header pagination */}
                <div className="container">
                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>
            {/*Header shape*/}
            <div className='header-shape'>
            <img src={headerShape} alt="" />
            </div>

            </div>
        </header>
    )
}