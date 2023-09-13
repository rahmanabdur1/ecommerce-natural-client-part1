import React, { useState } from 'react';
import './SlideShow.css'
import img1 from '../../assets/redgc.jpg';
import img2 from '../../assets/2.jpg';

const SlideShow = () => {
    const images = [img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="custom-carousel">
            <button className="prev-button" onClick={goToPreviousSlide}>
                &lt;
            </button>
            <div >
                <img  src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className="next-button" onClick={goToNextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default SlideShow;
