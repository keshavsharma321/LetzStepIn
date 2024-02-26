// import React from 'react'
// import Link from 'next/link'
// const data = [
//   {
//     link: "H1",
//     name: "The Metropolitan Manor",
//     image: "/Categories/Home/Image1",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
//   {
//     link: "H2",
//     name: "The Loft Life",
//     image: "/Categories/Home/image2",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
//   {
//     link: "H3",
//     name: "The Contemporary Chambers",
//     image: "/Categories/Home/image3",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
//   {
//     link: "H4",
//     name: "The Urban Haven",
//     image: "/Categories/Home/image4",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
//   {
//     link: "H5",
//     name: "The Urban Haven",
//     image: "/Categories/Home/image5",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
//   {
//     link: "H6",
//     name: "The Metro Haven",
//     image: "/Categories/Home/image6",
//     about: "An apartment is a private residence in a building or Home that's divided into several separate dwellings. An apartment can be one small room or several."
//   },
// ]
// const home = () => {
//   return (
//     <div>
//       <h1 className='flex justify-center font-sans text-5xl mb-4'>Homes And Flats</h1>
//       <div className="flex flex-wrap justify-center">
//         {data.map((item, index) => (
//           <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-20 py-8 ">
//             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <a href="#">
//                 <img className="rounded-t-lg" src={item.image} alt="" />
//               </a>
//               <div className="p-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
//                 </a>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.about}</p>
//                 <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   <h1 className='text-blue-700 hover:cursor-pointer'>Read More</h1>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default home

import React, { useState } from 'react';
import Link from 'next/link';
const CustomAlert = ({ message, onClose }: any) => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-10">
    <div className="bg-blue-200 p-8 rounded-lg flex justify-center">
      <div>
        <p className="text-4xl text-black font-serif "><b>{message}</b></p>
        <div className='flex justify-center'> <button onClick={onClose} className="mt-4  bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Close
        </button></div>
      </div>
    </div>
  </div>
);
const data = [
  {
    link: "C1",
    name: "Green Chillies",
    image: "/Categories/Cafe/Image1",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
  {
    link: "C2",
    name: "StarBucks",
    image: "/Categories/Cafe/image2",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
  {
    link: "C3",
    name: "Cafe Coffee Day",
    image: "/Categories/Cafe/image3",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
  {
    link: "C4",
    name: "Chai Sutta Bar",
    image: "/Categories/Cafe/Image4",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
  {
    link: "C5",
    name: "Rolls And Snacks",
    image: "/Categories/Cafe/Image5",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
  {
    link: "C6",
    name: "Tea And Toast",
    image: "/Categories/Cafe/Image6",
    about: "café, small eating and drinking establishment, historically a coffeeHome, usually featuring a limited menu; originally these establishments served only coffee."
  },
];

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div>
      {/* <h1 className='flex justify-center font-sans text-5xl mb-4'>Cafe And Reasutrants</h1> */}
      <h1 className='flex justify-center py-10 font-serif text-6xl mb-4'>Hotel And Room Booking</h1>

      <div className="flex flex-wrap ">
        <div className='w-full justify-evenly flex h-1/4 p-10'>
          <div className='w-1/2'><iframe className='rounded-2xl ml-4' src="https://www.google.com/maps/embed?pb=!4v1708513164981!6m8!1m7!1sCAoSK0FGMVFpcE9rMFVneVl5T2l1SHhTaS1Wbkw4TDVTZ2Jfdk5aVlhoYUR0UGs.!2m2!1d18.6228354!2d73.7583772!3f0!4f0!5f0.7820865974627469" width="650" height="550" loading="lazy" ></iframe></div>
          <div className='w-1/2'><h1 className='text-8xl justify-center flex p-4 font-serif'><i>SuryaLok</i></h1>
            <p className='text-4xl px-10 py-9  text-center font-serif'>Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator, and other kitchen facilities, upholstered chairs, a flat-screen television, and en-suite bathrooms.</p></div>
        </div>
        <h1 className='text-6xl ml-16 font-mono justify-start p-10'>What&apos;Inside</h1>
        <div className='flex px-4 w-full justify-center'>
          <div className='flex justify-evenly w-full flex-col py-8 px-8  sm:flex-row  border-2 rounded-xl border-gray'>
            <div className='  '>
              <div className='flex justify-center'><img src="https://cdn-icons-png.flaticon.com/128/1940/1940899.png"></img></div>
              <div className='flex justify-start text-2xl mt-8'>Best Catering</div>
            </div>
            <div className=''>
              <div><img src="https://cdn-icons-png.flaticon.com/128/2942/2942490.png"></img></div>
              <div className='flex justify-center text-2xl mt-8'>Good Infrastructure</div>
            </div>
            <div className=''>
              <div><img src="https://cdn-icons-png.flaticon.com/128/2846/2846864.png"></img></div>
              <div className='flex justify-center text-2xl mt-8'>Pools & Spa</div>
            </div>
            <div className=''>
              <div><img src="https://cdn-icons-png.flaticon.com/128/2298/2298699.png"></img></div>
              <div className='flex justify-center text-2xl mt-8'>Best Environment</div>
            </div>
            <div className=''>
              <div><img src="https://cdn-icons-png.flaticon.com/128/13378/13378214.png"></img></div>
              <div className='flex justify-center text-2xl mt-8'>Parking</div>
            </div>
            <div className=''>
              <div><img src="https://cdn-icons-png.flaticon.com/128/3393/3393554.png"></img></div>
              <div className='flex justify-center text-2xl mt-8'>Ultra fast Wifi</div>
            </div>
          </div>
        </div>
        <h1 className='text-6xl ml-16  mt-10 font-mono justify-start px-10 py-10'>Look&apos;s Inside</h1>
        <div className='px-8 w-full justify-evenly'>
          <div className='flex'>
            <div className='w-2/3 h-80 px-2'><img style={{ height: 330, width: 1050 }} src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"></img></div>
            <div className='w-1/3 h-80 px-2'><img className='ml-2' style={{ height: 320 }} src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"></img></div>
          </div>
          <div className='flex mt-8'>
            <div className='w-1/3 h-80 px-2'><img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"></img></div>
            <div className='w-1/3 h-80 px-2'><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"></img></div>
            <div className='w-1/3 h-80 px-2'><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"></img></div>
          </div>
        </div>
        <div className='w-full justify-center self-center px-20'>
          <h1 className='text-6xl ml-12  mt-16 font-mono justify-start '>Membership</h1>
          <div className='border-2 border-grey-800 rounded-lg mt-10 w-full py-4'>
            <div className='w-full py-6 flex'>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Single Person</b></h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 3000</h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
                <CustomAlert
                  message="Added to cart!"
                  onClose={handleCloseAlert}
                />
              )}
            </div>
            <hr className="flex-grow"></hr>
            <div className='w-full py-6 flex'>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Family Sets</b></h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 8000</h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
                <CustomAlert
                  message="Added to cart!"
                  onClose={handleCloseAlert}
                />
              )}            </div>
            <hr className="flex-grow "></hr>
            <div className='w-full py-6 flex'>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Halls Sets</b></h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 12000</h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
                <CustomAlert
                  message="Added to cart!"
                  onClose={handleCloseAlert}
                />
              )}            </div>
            <hr className="flex-grow"></hr>

            <div className='w-full py-6 flex'>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Sharing Available</b></h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 2000</h1></div>
              <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
                <CustomAlert
                  message="Added to cart!"
                  onClose={handleCloseAlert}
                />
              )}            </div>
          </div>
        </div>
        <div>

          <h1 className='text-6xl ml-16  mt-14 font-mono justify-start  px-10'>Testemonials</h1>

          <div className='m-16 flex  justify-between flex-col md:flex-row'>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div
                className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h6
                  className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Customer Reviews
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Mr. Harshad Mehta , CEO Mehta Industries
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  Fantastic experience wonder ambience staff behaviour is a very good food quality untimat over all excellent
                  Fantastic experience wonder ambience staff behaviour is a very good food quality untimat over all excellent
                </p>
                <a href="#" className="inline-block"><button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></button></a>
              </div>
            </div>
            <div className="relative flex bg-clip-border ml-10 rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem]  flex-row">
              <div
                className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="card-image" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h6
                  className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Customer Reviews
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Mr. Harshad Mehta , CEO Mehta Industries
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  Fantastic experience wonder ambience staff behaviour is a very good food quality untimat over all excellent
                  Fantastic experience wonder ambience staff behaviour is a very good food quality untimat over all excellent
                </p>
                <a href="#" className="inline-block"><button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></button></a>
              </div>
            </div>
          </div>

        </div>
        <div className='flex justify-center w-full'>
          <div className='w-full'>
            <section className="bg-blue-50 w-full dark:bg-slate-800" id="contact">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                  <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                      Contact
                    </p>
                    <h2
                      className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                      Get in Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                      dictumst
                    </p>
                  </div>
                </div>
                <div className="flex items-stretch justify-center">
                  <div className="grid md:grid-cols-2">
                    <div className="h-full pr-6">
                      <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                        className aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                        sagittis ante, ac tincidunt sem venenatis ut.
                      </p>
                      <ul className="mb-6 md:mb-0">
                        <li className="flex">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" className="h-6 w-6">
                              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                              <path
                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                              </path>
                            </svg>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                            <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" className="h-6 w-6">
                              <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                              </path>
                              <path d="M15 7a2 2 0 0 1 2 2"></path>
                              <path d="M15 3a6 6 0 0 1 6 6"></path>
                            </svg>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                            <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round" className="h-6 w-6">
                              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                              <path d="M12 7v5l3 3"></path>
                            </svg>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                              hours</h3>
                            <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                            <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                      <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                      <form id="contactForm">
                        <div className="mb-6">
                          <div className="mx-0 mb-1 sm:mb-4">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                            </div>
                          </div>
                          <div className="mx-0 mb-1 sm:mb-4">
                            <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* {data.map((item, index) => (
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
        ))} */}
      </div >
    </div >
  );
};

export default Home;
