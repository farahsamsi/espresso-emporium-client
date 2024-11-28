import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import PopularProducts from '../Components/PopularProducts';
import Insta from '../Components/Insta';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            {/* banner */}
            <Banner></Banner>
            <div className='my-10 lg:my-28 min-h-[500px] md:min-h-[800px] border border-green-500'>
                <PopularProducts></PopularProducts>
            </div>

            <Insta></Insta>

        </div>
    );
};

export default Home;