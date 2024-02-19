import React from 'react'
const data = [
  {
    name: "Dream Homes",
    image: "/Categories/RealEstate/Image2",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    name: "Attitude Reality",
    image: "/Categories/RealEstate/Image3",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    name: "Astra Properties",
    image: "/Categories/RealEstate/Image1",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    name: "Urban Homes",
    image: "/Categories/RealEstate/Image4",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
    name: "Avenue Reality",
    image: "/Categories/RealEstate/Image5",
    about: "the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made. Real estate is a form of real property."
  },
  {
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

export default RealEstate