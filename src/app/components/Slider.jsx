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
                <div className="slide" style={{ backgroundImage: "url('/1.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/2.JPG')"}}>
                    <div className="overlay" >
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/3.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/4.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/5.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/6.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/7.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/8.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/9.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/11.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/12.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/13.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/14.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/15.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/16.JPG')"}}>
                    <div className="overlay">
                        <Link className='hover-link' href={'/conference-variation'}></Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}