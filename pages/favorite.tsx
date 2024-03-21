// // import React from "react";
// // import Favorites from "../components/favorite";
// // import Breadcrumb from "../components/UI/Breadcrumb";

// // const favorite = () => {
// //   return (
// //     <div>
// //       <Breadcrumb />
// //       <Favorites />
// //     </div>
// //   );
// // };

// // export default favorite;
// import React, { useState } from 'react';
// import Link from 'next/link';
// // const CustomAlert = ({ message, onClose }: any) => (
// //   <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-10">
// //     <div className="bg-blue-200 p-8 rounded-lg flex justify-center">
// //       <div>
// //         <p className="text-4xl text-black font-serif "><b>{message}</b></p>
// //         <div className='flex justify-center'> <button onClick={onClose} className="mt-4  bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
// //           Close
// //         </button></div>
// //       </div>
// //     </div>
// //   </div>
// // );
// const data = [
//   {
//     link: "C1",
//     name: "Green Chillies",
//     image: "/Categories/Cafe/Image1",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
//   {
//     link: "C2",
//     name: "StarBucks",
//     image: "/Categories/Cafe/image2",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
//   {
//     link: "C3",
//     name: "Cafe Coffee Day",
//     image: "/Categories/Cafe/image3",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
//   {
//     link: "C4",
//     name: "Chai Sutta Bar",
//     image: "/Categories/Cafe/Image4",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
//   {
//     link: "C5",
//     name: "Rolls And Snacks",
//     image: "/Categories/Cafe/Image5",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
//   {
//     link: "C6",
//     name: "Tea And Toast",
//     image: "/Categories/Cafe/Image6",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee."
//   },
// ];

// const CafesAndRestaurants = () => {
//   // const [showAlert, setShowAlert] = useState(false);

//   // const handleAddToCart = () => {
//   //   setShowAlert(true);
//   // };

//   // const handleCloseAlert = () => {
//   //   setShowAlert(false);
//   // };
//   return (
//     // <div>
//     //   <section className="text-gray-600 w-full body-font overflow-hidden">
//     //     <div className="container  py-10 mx-auto">
//     //       <div className="lg:w-full mx-auto  flex flex-wrap">
//     //         <iframe className='rounded-2xl  ml-4' src="https://www.google.com/maps/embed?pb=!4v1708512434327!6m8!1m7!1sCAoSLEFGMVFpcE9EOUo0Qk1fcHdWbTdzdUdrOGFsNjdMYkVqVmQxZGtwMVNsaXhn!2m2!1d18.51053394956658!2d73.7817837945272!3f250.13315!4f0!5f0.7820865974627469" width="750" height="550" loading="lazy" ></iframe>
//     //         {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
//     //         <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
//     //           <h2 className="text-6xl title-font text-gray-500 tracking-widest">Timebox Coworking</h2>
//     //           <h1 className="text-gray-900 lg:mt-2 text-4xl title-font font-medium mb-1">Coworking And WorkStation In Noida</h1>
//     //           <div className="flex mb-4">
//     //             <span className="flex items-center">
//     //               <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//     //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//     //               </svg>
//     //               <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//     //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//     //               </svg>
//     //               <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//     //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//     //               </svg>
//     //               <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//     //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//     //               </svg>
//     //               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
//     //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
//     //               </svg>
//     //               <span className="text-gray-600 ml-3">4 Reviews</span>
//     //             </span>
//     //             <span className="flex ml-3 pl-3 px-4 py-2 border-l-2 border-gray-200 space-x-2s">
//     //               <a className="text-gray-500 px-1">
//     //                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//     //                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//     //                 </svg>
//     //               </a>
//     //               <a className="text-gray-500 px-1">
//     //                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//     //                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//     //                 </svg>
//     //               </a>
//     //               <a className="text-gray-500 px-1">
//     //                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//     //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//     //                 </svg>
//     //               </a>
//     //             </span>
//     //           </div>
//     //           <p className="leading-relaxed text-xl">The concept of co-working spaces is increasing rapidly. Timebox, which is a popular co-working space, has several branches all over the country and is one of the largest space providers for co-working spaces. The Goa Branch of Timebox is located at 607, Gera’s Imperium Star, Patto Plaza, Panaji, Goa 403001. Timebox provides fully furnished and well-equipped co-working spaces to working professionals and entrepreneurs so that they don’t face any hurdles in doing their work.</p>
//     //           <br></br>
//     //           <p className=' text-gray-500 text-xl font-bold'>Mon - Sat : 09:00 AM to 09:00 PM</p>
//     //           <br></br>
//     //           <p className=' text-gray-500 text-xl font-bold'>Sunday : Closed</p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </section>
//     //   <div className='w-full justify-center self-center px-20'>
//     //     <h1 className='text-6xl ml-12  mt-16 font-mono justify-start '>Pricing Plans</h1>
//     //     <div className='border-2 border-grey-800 rounded-lg mt-10 w-full py-4'>
//     //       <div className='w-full py-6 flex'>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Hot Desk</b></h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 7499/Seat</h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
//     //           <CustomAlert
//     //             message="Added to cart!"
//     //             onClose={handleCloseAlert}
//     //           />
//     //         )}
//     //       </div>
//     //       <hr className="flex-grow"></hr>
//     //       <div className='w-full py-6 flex'>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Dedicated Desk</b></h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 7499/Seat</h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
//     //           <CustomAlert
//     //             message="Added to cart!"
//     //             onClose={handleCloseAlert}
//     //           />
//     //         )}            </div>
//     //       <hr className="flex-grow "></hr>
//     //       <div className='w-full py-6 flex'>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Private Cabins</b></h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 8499/Seat</h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div> {showAlert && (
//     //           <CustomAlert
//     //             message="Added to cart!"
//     //             onClose={handleCloseAlert}
//     //           />
//     //         )}            </div>
//     //       <hr className="flex-grow"></hr>

//     //       <div className='w-full py-6 flex'>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'><b>Conference Halls</b></h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><h1 className='text-4xl font-sans'>Starts From ₹ 12000</h1></div>
//     //         <div className='w-1/3 flex justify-center text-center items-center'><button type="button" onClick={handleAddToCart} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  rounded-lg text-sm px-5 py-3 text-center me-2 flex "><img src="/images/add-to-basket-5854.png"></img><h1 className='ml-2 text-lg mt-1'>Add To Cart</h1></button></div>
//     //         {showAlert && (
//     //           <CustomAlert
//     //             message="Added to cart!"
//     //             onClose={handleCloseAlert}
//     //           />
//     //         )}</div>
//     //     </div>
//     //   </div>
//     //   <h1 className='text-6xl ml-16  mt-10 font-mono justify-start px-10 py-10'>Look&apos;s Inside</h1>
//     //   <div className='px-20 w-full justify-evenly'>
//     //     <div className='flex'>
//     //       <div className='w-2/3 h-80 px-2 hover:scale-110 transition duration-500 cursor-pointer'><img style={{ height: 330, width: 1050 }} src="https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nJTIwc3BhY2UlMjBob3Jpem9udGFsfGVufDB8fDB8fHww"></img></div>
//     //       <div className='w-1/3 h-80 px-2 hover:scale-110 transition duration-500 cursor-pointer'><img className='ml-2' style={{ height: 320 }} src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd29ya2luZyUyMHNwYWNlfGVufDB8fDB8fHww"></img></div>
//     //     </div>
//     //     <div className='flex mt-8'>
//     //       <div className='w-1/3 h-80 px-2 hover:scale-110 transition duration-500 cursor-pointer'><img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D"></img></div>
//     //       <div className='w-1/3 h-80 px-2 hover:scale-110 transition duration-500 cursor-pointer'><img src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293b3JraW5nJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D"></img></div>
//     //       <div className='w-1/3 h-80 px-2 hover:scale-110 transition duration-500 cursor-pointer'><img src="https://images.unsplash.com/photo-1594732832278-abd644401426?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvd29ya2luZyUyMHNwYWNlfGVufDB8fDB8fHww"></img></div>
//     //     </div>
//     //   </div>
//     //   <h1 className='text-6xl ml-16  mt-10 font-mono justify-start px-10 py-10'>Aminities</h1>
//     //   <div className='flex px-20 w-full justify-center'>
//     //     <div className='flex justify-evenly w-full flex-col py-4  sm:flex-row  border-2 rounded-xl border-gray'>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src="https://www.svgrepo.com/show/506956/cld-cloud-wifi.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Wifi/Internet</div>
//     //       </div>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src="https://www.svgrepo.com/show/195929/parking.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Wifi/Internet</div>
//     //       </div>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src="https://www.svgrepo.com/show/282339/cooling-cooler.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Air Conditioning</div>
//     //       </div>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src=" https://www.svgrepo.com/show/367083/maid.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Super Housekeeping</div>
//     //       </div>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src="https://www.svgrepo.com/show/187991/receipt.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Reception</div>
//     //       </div>
//     //       <div className='  '>
//     //         <div className='flex justify-center'><img className='h-36 w-36' src="https://www.svgrepo.com/show/247574/networking-laptops.svg"></img></div>
//     //         <div className='flex justify-center text-2xl mt-2'>Comfy Workstations</div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <div className='flex mt-12 w-full px-20'>
//     //     <div className='w-full'>
//     //       <section className="bg-blue-50 w-full dark:bg-slate-800" id="contact">
//     //         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//     //           <div className="mb-4">
//     //             <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
//     //               <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
//     //                 Contact
//     //               </p>
//     //               <h2
//     //                 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
//     //                 Get in Touch
//     //               </h2>
//     //               <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">Timebox Coworking And Workstation In Noida
//     //                 dictumst
//     //               </p>
//     //             </div>
//     //           </div>
//     //           <div className="flex items-stretch justify-center">
//     //             <div className="grid md:grid-cols-2">
//     //               <div className="h-full pr-6">
//     //                 <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
//     //                   The concept of co-working spaces is increasing rapidly. Timebox, which is a popular co-working space, has several branches all over the country and is one of the largest space providers for co-working spaces.
//     //                 </p>
//     //                 <ul className="mb-6 md:mb-0">
//     //                   <li className="flex">
//     //                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//     //                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     //                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//     //                         strokeLinejoin="round" className="h-6 w-6">
//     //                         <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
//     //                         <path
//     //                           d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
//     //                         </path>
//     //                       </svg>
//     //                     </div>
//     //                     <div className="ml-4 mb-4">
//     //                       <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
//     //                       </h3>
//     //                       <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
//     //                       <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
//     //                     </div>
//     //                   </li>
//     //                   <li className="flex">
//     //                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//     //                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     //                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//     //                         strokeLinejoin="round" className="h-6 w-6">
//     //                         <path
//     //                           d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
//     //                         </path>
//     //                         <path d="M15 7a2 2 0 0 1 2 2"></path>
//     //                         <path d="M15 3a6 6 0 0 1 6 6"></path>
//     //                       </svg>
//     //                     </div>
//     //                     <div className="ml-4 mb-4">
//     //                       <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
//     //                       </h3>
//     //                       <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
//     //                       <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
//     //                     </div>
//     //                   </li>
//     //                   <li className="flex">
//     //                     <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//     //                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     //                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//     //                         strokeLinejoin="round" className="h-6 w-6">
//     //                         <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
//     //                         <path d="M12 7v5l3 3"></path>
//     //                       </svg>
//     //                     </div>
//     //                     <div className="ml-4 mb-4">
//     //                       <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
//     //                         hours</h3>
//     //                       <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
//     //                       <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
//     //                     </div>
//     //                   </li>
//     //                 </ul>
//     //               </div>
//     //               <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
//     //                 <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
//     //                 <form id="contactForm">
//     //                   <div className="mb-6">
//     //                     <div className="mx-0 mb-1 sm:mb-4">
//     //                       <div className="mx-0 mb-1 sm:mb-4">
//     //                         <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
//     //                       </div>
//     //                       <div className="mx-0 mb-1 sm:mb-4">
//     //                         <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
//     //                       </div>
//     //                     </div>
//     //                     <div className="mx-0 mb-1 sm:mb-4">
//     //                       <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
//     //                     </div>
//     //                   </div>
//     //                   <div className="text-center">
//     //                     <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
//     //                   </div>
//     //                 </form>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </section>
//     //     </div>
//     //   </div>
//     //   <h1 className='text-6xl ml-16  mt-10 font-mono justify-start px-10 py-10'>Similar Properties</h1>
//     //   <div className='flex w-full px-20 justify-evenly'>
//     //     <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
//     //       <a className="block relative h-48 rounded overflow-hidden">
//     //         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//     //       </a>
//     //       <div className="mt-4">
//     //         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//     //         <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//     //         <p className="mt-1">$16.00</p>
//     //       </div>
//     //     </div>
//     //     <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
//     //       <a className="block relative h-48 rounded overflow-hidden">
//     //         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//     //       </a>
//     //       <div className="mt-4">
//     //         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//     //         <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//     //         <p className="mt-1">$16.00</p>
//     //       </div>
//     //     </div>
//     //     <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
//     //       <a className="block relative h-48 rounded overflow-hidden">
//     //         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//     //       </a>
//     //       <div className="mt-4">
//     //         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//     //         <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//     //         <p className="mt-1">$16.00</p>
//     //       </div>
//     //     </div>
//     //     <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
//     //       <a className="block relative h-48 rounded overflow-hidden">
//     //         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//     //       </a>
//     //       <div className="mt-4">
//     //         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//     //         <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//     //         <p className="mt-1">$16.00</p>
//     //       </div>
//     //     </div>
//     //     <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
//     //       <a className="block relative h-48 rounded overflow-hidden">
//     //         <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//     //       </a>
//     //       <div className="mt-4">
//     //         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//     //         <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//     //         <p className="mt-1">$16.00</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div>
//       <div className="flex flex-wrap justify-center">
//         <h1 className='flex justify-center font-sans text-5xl mb-4'>Universities And Colleges</h1>
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

// };

// export default CafesAndRestaurants;

