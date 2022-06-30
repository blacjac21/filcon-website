import React from "react";
import AliceCarousel from "react-alice-carousel";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";

const CarouselM = () => {
    return (
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite animationType="slide"  height="2em"  disableButtonsControls disableDotsControls>
            <img src={photo1} className="sliderimg"/>
             <img src={photo2} className="sliderimg"/>

        </AliceCarousel>
        
    )
}

export default CarouselM