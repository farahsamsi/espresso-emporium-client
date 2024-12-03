import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const AddNewCoffee = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };

        // send coffee data to the server
        fetch('https://coffee-store-server-nine-liart.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    e.target.name.value = '';
                    e.target.chef.value = '';
                    e.target.supplier.value = '';
                    e.target.taste.value = '';
                    e.target.category.value = '';
                    e.target.details.value = '';
                    e.target.photo.value = '';
                }
            })
    }

    return (
        <div className='w-11/12 container mx-auto '>
            <Helmet>
                <title>Add New Coffee | Espresso Emporium</title>
            </Helmet>
            <div className='my-5 lg:my-12'>
                <Link to={-1} className='flex items-center gap-3'>
                    <FaArrowLeftLong />
                    <h1 className='font-rancho text-xl'>Back to home</h1>
                </Link>
            </div>
            <div className='py-5 md:py-10 bg-[#F4F3F0] mb-6 md:mb-9'>
                <div className='w-10/12 mx-auto'>
                    <div className='text-center'>
                        <h1 className='font-rancho text-2xl lg:text-5xl text-[#374151]'>Add New Coffee</h1>
                        <p className='md:max-w-[930px] mx-auto my-4 md:my-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {/* row 1 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter coffee name" className="input w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Chef</span>
                                </label>
                                <input name='chef' type="text" placeholder="Enter coffee chef" className="input w-full" required />
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Supplier</span>
                                </label>
                                <input name='supplier' type="text" placeholder="Enter coffee supplier" className="input w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Taste</span>
                                </label>
                                <input name='taste' type="text" placeholder="Enter coffee taste" className="input w-full" required />
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Category</span>
                                </label>
                                <input name='category' type="text" placeholder="Enter coffee category" className="input w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Details</span>
                                </label>
                                <input name='details' type="text" placeholder="Enter coffee details" className="input w-full" required />
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className=''>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black/80">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Enter coffee Photo URL" className="input w-full" required />
                            </div>
                        </div>
                        {/* row 5 */}
                        <div>
                            <button type='submit' className='btn bg-btnBg font-rancho text-xl w-full'>Add Coffee</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddNewCoffee;