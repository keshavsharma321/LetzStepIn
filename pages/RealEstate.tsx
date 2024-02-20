import React from 'react'
import Link from 'next/link'
const data = [
  {
    link: "R1",
    name: "Dream Homes",
    image: "/Categories/RealEstate/Image2",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    link: "R2",
    name: "Attitude Reality",
    image: "/Categories/RealEstate/Image3",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    link: "R3",
    name: "Astra Properties",
    image: "/Categories/RealEstate/Image1",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    link: "R4",
    name: "Urban Homes",
    image: "/Categories/RealEstate/Image4",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    link: "R5",
    name: "Avenue Reality",
    image: "/Categories/RealEstate/Image5",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    link: "R6",
    name: "Pooja Enclaves",
    image: "/Categories/RealEstate/Image6",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
]
const RealEstate = () => {
  return (
    <div>
      <h1 className='flex justify-center font-sans text-5xl mb-4'>Real Estates And Enterprises</h1>
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

export default RealEstate