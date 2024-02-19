import React from 'react'
const data = [
    {
        name: "Rangoli Garden",
        image: "/Categories/Banquettes/Image1",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        name: "Maharaja Palace",
        image: "/Categories/Banquettes/image2",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        name: "King Resort",
        image: "/Categories/Banquettes/image3",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        name: "Pulwari Resort",
        image: "/Categories/Banquettes/image4",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
        name: "sagar Ratna",
        image: "/Categories/Banquettes/image5",
        about: " Banquets are usually celebratory occasions, often with some sort of recognition ceremony held during the event. They are, for the most part, viewed as a more formal event reserved ."
    },
    {
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
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default house