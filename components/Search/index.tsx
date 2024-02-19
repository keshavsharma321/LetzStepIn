import React from 'react';

const Search = () => {
    return (
        <div className="relative w-full max-w-full mb-10 bg-black">
            <img src="/images/search.png" alt="background" className="w-full h-full -ml-20" />
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center text-white flex-wrap">
                    <h1 className="text-2xl xl:text-4xl m-6 font-sans ">Welcome To LetzStepIn Private Limited</h1>
                    <input type="text" placeholder="Search..." className="px-4 py-2 bg-white rounded-3xl border border-gray-300 w-64 md:w-1/2" />
                    <h1 className="text-2xl xl:text-4xl font-sans m-10 px-12 py-6 hidden md:block">At LetzStepIn, we prioritize user satisfaction by providing a multitude of benefits, discounts, and rewards with every offline and online purchase. Our commitment to enhancing your brand's virtual presence is exemplified through our cutting-edge 360° advanced interactive virtual tour, featuring remote access, 3D models, and live video calling capabilities.</h1>
                    <h1 className="text-2xl xl:text-4xl font-sans m-10 px-12 hidden md:block">Elevate your business by joining our 360° trusted network, where sellers can thrive with a groundbreaking offer: 0% commission for a lifetime. We will empower your brand's digital journey, making every interaction a seamless and rewarding experience for both businesses and users alike.</h1>
                </div>
            </div>
        </div>
    );
};

export default Search;
