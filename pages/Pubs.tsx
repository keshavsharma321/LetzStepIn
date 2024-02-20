import React from 'react'
import Link from 'next/link'
const data = [
  {
    link: "BR1",
    name: "Liquesta Bar",
    image: "/Categories/Bars/Image1",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
  {
    link: "BR2",
    name: "Punjabi Love",
    image: "/Categories/Bars/Image2",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
  {
    link: "BR3",
    name: "Suryalook Bar",
    image: "/Categories/Bars/Image3",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
  {
    link: "BR4",
    name: "Old Rums",
    image: "/Categories/Bars/Image4",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
  {
    link: "BR5",
    name: "Desi Adda",
    image: "/Categories/Bars/Image5",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
  {
    link: "BR6",
    name: "Wines ND Chills",
    image: "/Categories/Bars/Image6",
    about: "A pub is a bar or tavern that serves food and often acts as a community gathering place. People visit pubs to eat lunch, to drink beer, or to play darts with their friends."
  },
]
const Pubs = () => {
  return (
    <div>
      <h1 className='flex justify-center font-sans text-5xl mb-4'>Pubs And Bars</h1>
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

export default Pubs