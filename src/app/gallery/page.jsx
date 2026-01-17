"use client"

import Header from "../components/Header"
import Slider from "../components/Slider"
import "../globals.css"

export default function Gallery() {
    return(
        <section className="gallery">
            <Header></Header>
            <Slider></Slider>
        </section>
    )
}