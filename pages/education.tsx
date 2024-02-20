import React from 'react'
import Link from 'next/link'
const data = [
    {
        id: "1",
        link: "Uni1",
        name: "Harvard University",
        image: "/Categories/education/Image1",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "2",
        link: "Uni2",
        name: "Delhi University",
        image: "/Categories/education/image2",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "3",
        link: "Uni3",
        name: "AKTU University",
        image: "/Categories/education/image3",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "4",
        link: "Uni4",
        name: "JNU University",
        image: "/Categories/education/image4",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "5",
        link: "Uni5",
        name: "Standford University",
        image: "/Categories/education/image5",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
    {
        id: "6",
        link: "Uni6",
        name: "Oxford University",
        image: "/Categories/education/image6",
        about: "In this course you will: Become familiar with the university lecture. Focus on the principles of learning and memory, critical thinking, and academic writing. Participate in small seminars."
    },
]
const education = () => {
    return (
        <div>
            <h1 className='flex justify-center font-sans text-5xl mb-4'>Universities And Colleges</h1>
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

export default education