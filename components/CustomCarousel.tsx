'use client'
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'



interface Props {
    slides: string[];
}

// Slider component
const Slider: React.FC<Props> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const touchStartXRef = useRef<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<"left" | "right">();



    const nextSlide = () => {
        setSlideDirection("left");
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setSlideDirection("right");
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchStartX = touchStartXRef.current;

        if (touchStartX && touchEndX) {
            const deltaX = touchEndX - touchStartX;
            if (deltaX > 50) {
                prevSlide();
            } else if (deltaX < -50) {
                nextSlide();
            }
        }

        touchStartXRef.current = null;
    };


    return (
        <div className={`slider ${slideDirection} flex align-center`} onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <button className="pl-2" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} size={"lg"} /></button>
            <div className="slide">
                <Image src={slides[currentSlideIndex]} alt="test" width={400} height={400} />
            </div>
            <button className="pr-2" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} size={"lg"}/></button>
        </div>
    );
};



export default Slider;