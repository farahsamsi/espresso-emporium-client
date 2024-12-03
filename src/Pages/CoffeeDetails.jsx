import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className='w-11/12 container mx-auto '>
            <Helmet>
                <title>{name} | Espresso Emporium</title>
            </Helmet>
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
            </div>
            <div className="card bg-[#F4F3F0] flex-col md:flex-row w-11/12 mx-auto my-6">
                <figure className="px-10 py-10 md:w-5/12">
                    <img
                        src={photo}
                        alt={name}
                        className="rounded-xl w-full object-cover" />
                </figure>
                <div className="flex flex-col justify-center items-start gap-3 px-4 pb-10 md:pt-10">
                    <h1 className='font-rancho text-4xl text-[#331A15]'>Niceties</h1>
                    <p><span className="font-bold">Name : </span>{name}</p>
                    <p><span className="font-bold">Chef : </span>{chef}</p>
                    <p><span className="font-bold">Taste : </span>{taste}</p>
                    <p><span className="font-bold">Supplier : </span>{supplier}</p>
                    <p><span className="font-bold">Category : </span>{category}</p>
                    <p><span className="font-bold">Details : </span>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;