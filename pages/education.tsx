// import React from 'react'
// import Link from 'next/link'
// const data = [
//     {
//         id: "1",
//         link: "Uni1",
//         name: "Harvard University",
//         image: "/Categories/education/Image1",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
//     {
//         id: "2",
//         link: "Uni2",
//         name: "Delhi University",
//         image: "/Categories/education/image2",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
//     {
//         id: "3",
//         link: "Uni3",
//         name: "AKTU University",
//         image: "/Categories/education/image3",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
//     {
//         id: "4",
//         link: "Uni4",
//         name: "JNU University",
//         image: "/Categories/education/image4",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
//     {
//         id: "5",
//         link: "Uni5",
//         name: "Standford University",
//         image: "/Categories/education/image5",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
//     {
//         id: "6",
//         link: "Uni6",
//         name: "Oxford University",
//         image: "/Categories/education/image6",
//         about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
//     },
// ]
// const education = () => {
//     return (
//         <div>
//             <h1 className='flex justify-center font-sans text-5xl mb-4'>Universities And Colleges</h1>
//             <div className="flex flex-wrap justify-center">
//                 {data.map((item, index) => (
//                     <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-20 py-8 ">
//                         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                             <a href="#">
//                                 <img className="rounded-t-lg" src={item.image} alt="" />
//                             </a>
//                             <div className="p-5">
//                                 <a href="#">
//                                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
//                                 </a>
//                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.about}</p>
//                                 <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                     <h1 className='text-blue-700 hover:cursor-pointer'>Read More</h1>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default education
import React, { useState } from 'react';
import Link from 'next/link'
const data = [
    {
        id: "1",
        link: "Uni1",
        name: "Harvard University",
        location: { lat: 0, lng: 0 },
        image: "/Categories/education/Image1",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "2",
        link: "Uni2",
        name: "Delhi University",
        location: { lat: 0, lng: 0 },
        image: "/Categories/education/image2",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "3",
        link: "Uni3",
        name: "AKTU University",
        location: { lat: 0, lng: 0 },
        image: "/Categories/education/image3",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "4",
        link: "Uni4",
        location: { lat: 0, lng: 0 },
        name: "JNU University",
        image: "/Categories/education/image4",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "5",
        location: { lat: 0, lng: 0 },
        link: "Uni5",
        name: "Standford University",
        image: "/Categories/education/image5",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "6",
        link: "Uni6",
        name: "Oxford University",
        location: { lat: 0, lng: 0 },
        image: "/Categories/education/image6",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
]
const Education = () => {
    const [view, setView] = useState('list'); // State to manage view (list or map)
    const [selectedLocation, setSelectedLocation] = useState(null); // State to manage selected location for map modal

    const toggleView = () => {
        setView(view === 'list' ? 'map' : 'list');
    };

    const openMapModal = (location: any) => {
        setSelectedLocation(location);
    };

    const closeMapModal = () => {
        setSelectedLocation(null);
    };

    return (
        <div>
            {/* <h1 className='text-xl mb-2 px-8'>Home / Coworking / Noida</h1> */}
            {/* <hr></hr> */}
            <div className="flex justify-evenly mt-6 mb-8">
                <div className='w-full'><h1 className=' px-16 font-serif text-4xl'><b>Education And PreSchooling</b></h1></div>
                <div className='w-full px-16 flex justify-end'>
                    <div className='py-2 flex  justify-center px-2 rounded border-2 border-grey'><select className=''><option className=''>Select Price</option><option className=' '>Less then Rs.10,000</option><option className=' '>10,000 - 20,0000</option><option className=' '>20,000 - 30,000</option><option className=' '>30,000 - 40,000</option></select></div>
                    <button onClick={toggleView} className="ml-6  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {view === 'list' ? 'Map View' : 'List View'}
                    </button>
                </div>
            </div>
            <div className='flex w-full px-12 overflow-y-scroll '>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>MG Road Gurugram</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Dwarika , Sector 24</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>DLF Noida</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Cannought Place , Delhi</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Sector 64</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Raj Nagar Extension</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>gaur City Mall</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Red Fort Area</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Nawab Ganj Chowk</h1></div>
                <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Duhai</h1></div>
            </div>
            {view === 'list' ? (
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-4/12 mt-8 ml-16 border-2 border-grey rounded-lg'>hello</div>
                    <div className="flex flex-wrap -ml-6 justify-center px-10">
                        {data.map((item, index) => (
                            <div key={index} className="flex justify-evenly px-6  py-8">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={item.image} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <div className='flex justify-between'>
                                            <a href="#">
                                                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            </a>
                                            <a><img className='h-16 -mt-6' src="http://localhost:3000/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"></img></a>
                                        </div>

                                        <p className="mb-2 font-normal flex text-gray-700 dark:text-gray-400"><img className='h-4 w-4 mt-1 mr-1' src="https://cdn-icons-png.flaticon.com/128/149/149060.png"></img>{item.about}</p>
                                        <hr></hr>
                                        <div className='flex w-full mt-2'>
                                            <div className='w-2/3 flex text-lg justify-start'><img className='h-5 w-5  mr-1' src="https://cdn-icons-png.flaticon.com/128/2807/2807224.png"></img>Comfy Workstations</div>
                                            <div className='w-1/3 flex text-lg justify-end'><b>Starting from</b></div>
                                        </div>
                                        <div className='flex w-full mt-2'>
                                            <div className='w-1/2 flex text-lg justify-start'><img className='h-5 w-5  mr-1' src="https://cdn-icons-png.flaticon.com/128/1509/1509606.png"></img>Private Cabins</div>
                                            <div className='w-1/2 flex text-lg justify-end'><b>Rs. 7,699</b></div>
                                        </div>
                                        <div className='flex mt-2'>
                                            <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <h1 className='text-blue-700 hover:cursor-pointer w-full justify-start'>Explore More</h1>
                                            </Link>
                                            <button onClick={() => openMapModal(item.location)} className="text-md flex w-full justify-end text-blue-700 hover:text-blue-700 focus:outline-none">
                                                View Map
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            ) : (
                <div className='mt-8'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447908.52408828447!2d76.99643812947232!3d28.711017283667935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb11aaaaaab%3A0xcba3e9ce13b65cb5!2sGreen%20Chilli&#39;s%20Chinese%20%26%20More!5e0!3m2!1sen!2sin!4v1709320098521!5m2!1sen!2sin" className='w-full' height="650" loading="lazy" ></iframe>
                </div>
            )}
            {selectedLocation && (
                <div className='flex justify-center'>
                    <div className="fixed top-20 mt-20    w-1/2 h-1/2 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-4 w-full h-full rounded-lg">
                            <button onClick={closeMapModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447908.52408828447!2d76.99643812947232!3d28.711017283667935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb11aaaaaab%3A0xcba3e9ce13b65cb5!2sGreen%20Chilli&#39;s%20Chinese%20%26%20More!5e0!3m2!1sen!2sin!4v1709320098521!5m2!1sen!2sin" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;


