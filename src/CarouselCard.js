import React from "react";

const CarouselCard = ({ cardEntry }) => {
    return (
        <div className="CarouselCard" onClick={() => window.alert(cardEntry.text)}>
            <img className="CarouselCardImage" src={cardEntry.image} alt={cardEntry.text}></img>
            <p className="CarouselCardLabel">{cardEntry.text}</p>
        </div>
    );
}

export default CarouselCard;