import React from 'react';
import {
    NavBar,
    Hero,
    ShowCase,
    Facilities,
    Review,
    Footer,
} from '../Components';

function HomePage() {
    return (
        <div>
            <NavBar isShow={true} />
            <Hero />
            <ShowCase />
            <Facilities />
            <Review />
            <Footer />
        </div>
    );
}

export default HomePage;
