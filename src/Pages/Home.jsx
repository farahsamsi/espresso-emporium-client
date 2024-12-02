import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner';
import PopularProducts from '../Components/PopularProducts';
import Insta from '../Components/Insta';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffeeData = useLoaderData();

    const [coffees, setCoffees] = useState(coffeeData);

    return (
        <div>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>

            {/* banner */}
            <Banner></Banner>

            <div className='my-10 lg:my-28 min-h-[500px] md:min-h-[800px]'>
                <PopularProducts
                    coffees={coffees}
                    setCoffees={setCoffees}></PopularProducts>
            </div>

            <Insta></Insta>

        </div>
    );
};

export default Home;