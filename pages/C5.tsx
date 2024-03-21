import React, { useState } from 'react';
import Link from 'next/link';


const C5 = () => {
    return (
        <div className='-mt-4 -mb-12'>
            <section className="text-gray-600 w-full body-font overflow-hidden">
                <div className="container  py-10 mx-auto">
                    <div className="lg:w-full mx-auto  flex flex-wrap">
                        <div className="relative">
                            <iframe
                                className="rounded-2xl ml-4"
                                src="https://www.google.com/maps/embed?pb=!4v1708512434327!6m8!1m7!1sCAoSLEFGMVFpcE9EOUo0Qk1fcHdWbTdzdUdrOGFsNjdMYkVqVmQxZGtwMVNsaXhn!2m2!1d18.51053394956658!2d73.7817837945272!3f250.13315!4f0!5f0.7820865974627469"
                                width="750"
                                height="550"
                                loading="lazy"
                            ></iframe>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
                                <div className="bg-white  p-4 shadow-lg">
                                    <h1 className="text-xl flex font-bold"><img className='h-8 w-8 -mt-1 mr-1' src='https://cdn-icons-png.flaticon.com/128/10691/10691548.png'></img>Availability Timings</h1>
                                    <br></br>
                                    <p className=' text-gray-500 text-xl font-bold'>Mon - Sat : 09:00 AM to 09:00 PM</p>
                                    <p className=' text-gray-500 text-xl font-bold'>Sunday : Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-6xl title-font text-gray-500 tracking-widest">Timebox Coworking</h2>
                            <h1 className="text-gray-900 lg:mt-2 text-4xl title-font font-medium mb-1">Coworking And WorkStation In Mumbai</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 px-4 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500 px-1">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 px-1">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 px-1">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-2xl">The concept of co-working spaces is increasing rapidly. Timebox, which is a popular co-working space, has several branches all over the country and is one of the largest space providers for co-working spaces. The Goa Branch of Timebox is located at 607, Gera’s Imperium Star, Patto Plaza, Panaji, Goa 403001.</p>
                            <br></br>

                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full justify-center self-center px-20'>
                <h1 className='text-6xl ml-16  mt-10 font-serif justify-start  py-10'><b>Pricing Plans</b></h1>
                <div className=" w-full px-10">
                    <div className="w-full-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <div className="px-6 py-8">
                                <h3 className="text-3xl font-bold mb-4 text-blue-400">Hot Desk</h3>
                                <p className="text-lg text-gray-600 mb-8">Choose and work at any desk within the community area.</p>
                                <h2 className="text-4xl font-bold mb-8 text-gray-600">starting from
                                    ₹6,500/Seat</h2>
                                <a href="#"
                                    className="bg-blue-400 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out">Buy
                                    Now</a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <div className="px-6 py-8">
                                <h3 className="text-3xl font-bold mb-4 text-blue-400">Dedicated Desk</h3>
                                <p className="text-lg text-gray-600 mb-8">A fixed desk in a shared coworking space with in the community area.</p>
                                <h2 className="text-4xl font-bold mb-8  text-gray-600">starting from
                                    ₹7,000/Seat</h2>
                                <a href="#"
                                    className="bg-blue-400 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-600 transition duration-300 ease-in-out">Buy
                                    Now</a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <div className="px-6 py-8">
                                <h3 className="text-3xl font-bold mb-4 text-blue-400">Private Cabin</h3>
                                <p className="text-lg text-gray-600 mb-8">Private office space dedicated to you and your team.</p>
                                <h2 className="text-4xl font-bold mb-8  text-gray-600">starting from
                                    ₹7,500/Seat</h2>
                                <a href="#"
                                    className="bg-blue-400 text-white py-2 px-4 rounded-lg text-lg hover:bg-blue-600 transition duration-300 ease-in-out">Buy
                                    Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex'>
                <div className='w-1/2'><h1 className='text-6xl ml-24  mt-10 font-serif justify-start px-20 py-10'><b>Aminities</b></h1>
                </div>
                <div className='w-1/2 h-96 mt-10 py-10 overflow-y-auto '>
                    <div className='flex'>
                        <div>
                            <img className='h-24' src="https://cdn-icons-png.flaticon.com/128/1459/1459402.png"></img>
                        </div>
                        <div>
                            <h1 className='text-4xl ml-16'>Wifi</h1>
                            <p className='text-2xl ml-16 mt-6'>Stay Connected with Seamless WiFi Excellence.</p>
                        </div>
                    </div>
                    <br></br>
                    <hr className='w-10/12'></hr>

                    <div className='flex py-6'>
                        <div>
                            <img className='h-24' src=" https://cdn-icons-png.flaticon.com/128/1584/1584491.png"></img>
                        </div>
                        <div>
                            <h1 className='text-4xl ml-16'>Comfy Workstations</h1>
                            <p className='text-2xl ml-16 mt-6 '>Comfortable and relaxed environment for your<br></br> work space.</p>
                        </div>
                    </div>
                    <hr className='w-10/12'></hr>
                    <div className='flex py-6'>
                        <div>
                            <img className='h-24' src=" https://cdn-icons-png.flaticon.com/128/3005/3005359.png"></img>
                        </div>
                        <div>
                            <h1 className='text-4xl ml-16'>Parking</h1>
                            <p className='text-2xl ml-16 mt-6'>Secured Parking for your vechiles.</p>
                        </div>
                    </div>
                    <hr className='w-10/12'></hr>
                    <div className='flex py-6'>
                        <div>
                            <img className='h-24' src="https://cdn-icons-png.flaticon.com/128/9849/9849749.png"></img>
                        </div>
                        <div>
                            <h1 className='text-4xl ml-16'>Cafeteria</h1>
                            <p className='text-2xl ml-16 mt-6'>Stay Relaxed and work in good environment.</p>
                        </div>
                    </div>
                    <hr className='w-10/12'></hr>

                    <div className='flex py-6'>
                        <div>
                            <img className='h-24' src=" https://cdn-icons-png.flaticon.com/128/2731/2731291.png"></img>
                        </div>
                        <div>
                            <h1 className='text-4xl ml-16'>Super Housekeeping</h1>
                            <p className='text-2xl ml-16 mt-6'>Stay Relaxed and work in good environment.</p>
                        </div>
                    </div>
                    <hr className='w-10/12'></hr>
                </div>
            </div>


            <div className='flex mt-12 w-full px-20'>
                <div className='w-full'>
                    <section className="bg-blue-50 w-full dark:bg-slate-800" id="contact">
                        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                            <div className="mb-4">
                                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                                    <h2
                                        className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                        Get in Touch
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">Timebox Coworking And Workstation In Noida
                                        dictumst
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-stretch justify-center">
                                <div className="grid md:grid-cols-2">
                                    <div className="h-full pr-6">
                                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                            The concept of co-working spaces is increasing rapidly. Timebox, which is a popular co-working space, has several branches all over the country and is one of the largest space providers for co-working spaces.
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
            <h1 className='text-6xl ml-16  mt-10 font-serif justify-start px-10 py-10'><b>Interiors View</b></h1>
            <div className='flex w-11/12 ml-24 overflow-x-auto'>
                <div className="flex ">
                    <img className='h-72 ' src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nfGVufDB8fDB8fHww"></img>
                    <img className='h-72 px-5' src="https://plus.unsplash.com/premium_photo-1661963942331-50c037df1c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y293b3JraW5nfGVufDB8fDB8fHww"></img>
                    <img className='h-72 px-5' src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y293b3JraW5nfGVufDB8fDB8fHww"></img>
                    <img className='h-72 px-5' src="https://plus.unsplash.com/premium_photo-1661963899181-3adc0a644f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y293b3JraW5nfGVufDB8fDB8fHww"></img>
                    <img className='h-72 px-5' src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img className='h-72 px-5' src="https://images.unsplash.com/photo-1614070776241-fb47cec38278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"></img>
                    <img className='h-72 I' src="https://images.unsplash.com/photo-1562664348-2188b99b5157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"></img>
                </div>
            </div>

            <h1 className='text-6xl ml-16  mt-10 font-serif justify-start px-10 py-10'><b>Similar Properties</b></h1>
            <div className='flex w-full px-20  justify-evenly'>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-60 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">Coworking</h3>
                        <h2 className=" title-font text-lg font-medium ml-2">We Work</h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹8,500/Seat</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">Coworking</h3>
                        <h2 className=" title-font text-lg font-medium ml-2">Spring House</h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹6,500/Seat</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y293b3JraW5nfGVufDB8fDB8fHwwI" />
                    </a>
                    <div className="mt-4">
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">Coworking</h3>
                            <h2 className=" title-font text-lg font-medium ml-2">Employers Place</h2>
                            <p className="mt-1 text-lg ml-2">Starting from ₹5,500/Seat</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://plus.unsplash.com/premium_photo-1661963899181-3adc0a644f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y293b3JraW5nfGVufDB8fDB8fHww" />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">Coworking</h3>
                        <h2 className="title-font text-lg font-medium ml-2"><b>The Officers</b></h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹6,500/Seat</p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>

    )

};

export default C5;

