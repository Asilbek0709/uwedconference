"use client"
import "../globals.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Slider() {



    return(
        <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ 
                clickable: true, 
                renderBullet: (index, className) => {
                    return `
                        <span class="${className} custom-line">
                            <span class="progress"></span>
                        </span>
                    `
                }
            }}
            autoplay={{ 
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop
            className="heroSwiper"
        >
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/1.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/2.jpg')"}}>
                    <div className="overlay" >
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/3.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/4.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/5.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/6.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/7.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/8.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/9.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/11.jpg')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}