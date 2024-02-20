import React from 'react'
import Link from 'next/link'
const data = [
    {
        link: "B1",
        name: "Rangoli Garden",
        image: "/Categories/Banquettes/Image1",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        link: "B2",
        name: "Maharaja Palace",
        image: "/Categories/Banquettes/image2",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        link: "B3",
        name: "King Resort",
        image: "/Categories/Banquettes/image3",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        link: "B4",
        name: "Pulwari Resort",
        image: "/Categories/Banquettes/image4",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        link: "B5",
        name: "Sagar Ratna",
        image: "/Categories/Banquettes/image5",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        link: "B6",
        name: "RangMahal Resort",
        image: "/Categories/Banquettes/image6",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. "
    },
]
const house = () => {
    return (
        <div>
            <h1 className='flex justify-center font-sans text-5xl mb-4'>Banquettes And Halls</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-20 py-8 ">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.about}</p>
                                <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <h1 className='text-blue-700 hover:cursor-pointer'>Read More</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default house