import React from "react";
import "./Carousel.css";


const CarouselCard = ({ cardEntry, small = false}) => {
    return (
        <div className={!small ? "CarouselCard" : "CarouselCardSmaller"} onClick={() => window.alert(cardEntry.text)}>
            <img className="CarouselCardImage" src={cardEntry.image} alt={cardEntry.text}></img>
            <p className="CarouselCardLabel">{cardEntry.text}</p>
        </div>
    );
}

export default CarouselCard;