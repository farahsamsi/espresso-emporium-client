import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            {/* banner */}
            <Banner></Banner>

        </div>
    );
};

export default Home;