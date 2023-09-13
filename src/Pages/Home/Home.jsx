import React from 'react';
import Slideshow from '../SlideShow/SlideShow';
import FetureBrand from '../FetureBrand/FetureBrand';
import Feedback from '../Feedback/Feedback';
import ShowCategory from '../ShowCategory/ShowCategory';
import FreeServiceDetails from '../FreeServiceDetails/FreeServiceDetails';

const Home = () => {
    return (
        <div>
            <Slideshow/>
            <FetureBrand/>
            <Feedback/>
            <ShowCategory/>
            <FreeServiceDetails/>
        </div>
    );
};

export default Home;