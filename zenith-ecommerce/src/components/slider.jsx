import React, { useState, useEffect } from 'react';
import './SliderSection.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [1, 2, 3, 4, 5]; // 5 slides for example

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
                                Slide {slide}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="slider-btn prev" onClick={prevSlide}>‹</button>
            <button className="slider-btn next" onClick={nextSlide}>›</button>
        </div>
    );
};

export default Slider;