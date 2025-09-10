import React, { useState, useEffect } from 'react';
import './SliderSection.css';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [1, 2, 3, 4, 5];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {slides.map((slide, index) => {
                    const slidePosition = (index - currentSlide + slides.length) % slides.length;
                    let slideClass = 'slide';

                    if (slidePosition === 0) {
                        slideClass += ' center';
                    } else if (slidePosition === 1) {
                        slideClass += ' side right';
                    } else if (slidePosition === slides.length - 1) {
                        slideClass += ' side left';
                    } else if (slidePosition < currentSlide) {
                        slideClass += ' hidden left';
                    } else {
                        slideClass += ' hidden right';
                    }

                    return (
                        <div key={index} className={slideClass}>
                            <div className="slide-content">

                                <button className="shop-now-btn">Shop Now</button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Left Arrow */}
            <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M15 4l-8 8 8 8V4z" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M9 4v16l8-8-8-8z" />
                </svg>
            </button>

        </div>
    );
};

export default Slider;