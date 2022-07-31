import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import finn from "../assets/finn.png";
import mjam from "../assets/mjam.png";
import chelly from "../assets/chelly.png";
import marc from "../assets/marc.png";
import anya from "../assets/anya.png";
import epic from "../assets/epic.png";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";

const Carousel = () => {
    const [cardData, setCardData] = React.useState([
        {image: chelly, text: "QueenChelly"},
        {image: mjam, text: "mJam"},
        {image: finn, text: "PleasantFinn"},
        {image: marc, text: "MarcFransen"},
        {image: anya, text: "AnyaTheNerd"},
        {image: epic, text: "EpicTastic"},
    ]);

    const rotateCardsLeft = () => {
        console.log("Shifting to the left")

        var newArr = [...cardData];

        var lastElement = newArr.pop();
        newArr.unshift(lastElement);

        setCardData(newArr);
    }

    const rotateCardsRight = () => {
        console.log("Shifting to the right")
        var newArr = [...cardData];

        var firstElement = newArr.shift();
        newArr.push(firstElement);

        setCardData(newArr);
    }

    return (
        <div className="Carousel">
            <ChevronLeft 
                className="CarouselRotateButton" 
                onClick={() => rotateCardsLeft()} 
            />
            {cardData.map((cardEntry, index) => {
                if (index <= 2)
                return (
                    <CarouselCard key={index} cardEntry={cardEntry} 
                    small={index != 1 && true}/>
                );
            })}
            <ChevronRight 
                className="CarouselRotateButton" 
                onClick={() => rotateCardsRight()} 
            />
        </div>
    );
}

export default Carousel;