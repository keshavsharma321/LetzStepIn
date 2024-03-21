import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const C1 = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className="bg-white -mt-20 -mb-12 ">
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container -mt-10 px-5 py-24 mx-auto">
                    <div className="lg:w-full h-72 mx-auto flex ">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-2 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                CO-WORKING
                            </h2>
                            <h6 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                The TimeBox CoWorking
                            </h6>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                Welcome to the dynamic world of coworking, where innovation,
                                collaboration, and community converge to redefine the
                                traditional workspace. Coworking spaces have revolutionized the
                                concept of work, offering individuals, freelancers, startups,
                                and small businesses a vibrant and flexible environment to
                                thrive in.
                            </p>
                            <br></br>
                            <br></br>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    Rs.8,999/month
                                </span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Buy Now
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <iframe
                                className=" rounded-md ml-4"
                                src="https://www.google.com/maps/embed?pb=!4v1708512434327!6m8!1m7!1sCAoSLEFGMVFpcE9EOUo0Qk1fcHdWbTdzdUdrOGFsNjdMYkVqVmQxZGtwMVNsaXhn!2m2!1d18.51053394956658!2d73.7817837945272!3f250.13315!4f0!5f0.7820865974627469"
                                width="650"
                                height="500"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full flex p-16">
                <div
                    style={{ height: 840 }}
                    className="w-2/3  mr-16  overflow-y-scroll"
                >
                    <h6 className="text-3xl">Offerings And Pricing</h6>

                    <div className="w-full mr-10 ">
                        <br></br>
                        <div className=" flex w-full border-2 p-4 rounded-xl ">
                            <div className="w-2/3 h-44">
                                <h6 className="text2xl py-2 text-gray">PRIVATE OFFICES</h6>
                                <p className="text-gray-700">
                                    Choose a private cabin to work without any disturbance with
                                    world-className amenities.Book private office space for rent with
                                    WeWork. Best for teams of 1-20.
                                </p>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r h-10  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Add To Cart
                                    </button>

                                    <p className="mr-8 -mt-2 text-blue-400">
                                        Starting at <br></br>₹ 10,999 / month
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/3  h-40">
                                <img
                                    className="h-44 rounded-lg w-96"
                                    src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMG9mZmljZXN8ZW58MHx8MHx8fDA%3D"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-10">
                        <br></br>
                        <div className="flex w-full border-2 p-4 rounded-xl ">
                            <div className="w-2/3 h-44">
                                <h6 className="text2xl py-2 text-gray">Dedicated Desk</h6>
                                <p className="text-gray-700">
                                    Choose a private Desk to work without any disturbance with
                                    world-className amenities.Book private Desk space for rent with
                                    WeWork. Best for Single Person .
                                </p>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r h-10  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Add To Cart
                                    </button>

                                    <p className="mr-8 -mt-2 text-blue-400">
                                        Starting at <br></br>₹ 12,999 / month
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/3  h-40">
                                <img
                                    className="h-44 rounded-lg w-96"
                                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVza3xlbnwwfHwwfHx8MA%3D%3D"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-10">
                        <br></br>
                        <div className="flex w-full border-2 p-4 rounded-xl ">
                            <div className="w-2/3 h-44">
                                <h6 className="text2xl py-2 text-gray">MEETINGS ROOMS</h6>
                                <p className="text-gray-700">
                                    Choose a Meeting Room to work without any disturbance with
                                    world-className amenities.Book Meeting Rooms space for rent with
                                    WeWork. Best for teams of 1-20.
                                </p>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r h-10  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Add To Cart
                                    </button>

                                    <p className="mr-8 -mt-2 text-blue-400">
                                        Starting at <br></br>₹ 13,999 / month
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/3  h-40">
                                <img
                                    className="h-44 rounded-lg w-96"
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZyUyMHJvb21zfGVufDB8fDB8fHww"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-10">
                        <br></br>
                        <div className="flex w-full border-2 p-4 rounded-xl ">
                            <div className="w-2/3 h-44">
                                <h6 className="text2xl py-2 text-gray">EVENT SPACE</h6>
                                <p className="text-gray-700">
                                    Choose a event space to work without any disturbance with
                                    world-className amenities.Book event space for rent with WeWork.
                                    Best for teams of 1-20.
                                </p>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r h-10  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    >
                                        Add To Cart
                                    </button>

                                    <p className="mr-8 -mt-2 text-blue-400">
                                        Starting at <br></br>₹ 10,999 / month
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/3  h-40">
                                <img
                                    className="h-44 rounded-lg w-96"
                                    src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwc3BhY2VzfGVufDB8fDB8fHww"
                                ></img>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-1/3 h-72">
                    <div>
                        <br></br>
                        <h6 className="text-4xl">Ameneties</h6>
                        <br></br>
                        <div className="w-96 h-auto   border-2 rounded-xl">
                            <div className="flex ml-6 mt-4 justify-evenly">
                                <div className="w-24 ">
                                    <div>
                                        <img
                                            className="h-8 w-8"
                                            src="https://cdn-icons-png.flaticon.com/128/995/995053.png"
                                        ></img>
                                    </div>
                                    <div className="flex  mt-1 items-center justify-center">
                                        <h6 className="mt-2 text-sm">Cleaning Services</h6>
                                    </div>
                                </div>
                                <div className="w-24">
                                    <div>
                                        <img
                                            className="h-8 mt-2 w-8"
                                            src="https://cdn-icons-png.flaticon.com/128/3320/3320987.png"
                                        ></img>
                                    </div>
                                    <div className="  items-center justify-center">
                                        <h6 className="mt-2 text-sm">Lift access</h6>
                                    </div>
                                </div>
                                <div className="w-24">
                                    <div>
                                        <img
                                            className="h-10 w-8"
                                            src="https://img.icons8.com/?size=80&id=4go6eNWhpV7H&format=png"
                                        ></img>
                                    </div>
                                    <div className="flex  items-center justify-center">
                                        <h6 className="mt-2 text-sm">CCTV Cameras</h6>
                                    </div>
                                </div>
                                <div className="w-24">
                                    <div>
                                        <img
                                            className="h-8 w-8 "
                                            src="https://img.icons8.com/?size=80&id=J520kDpPaQs4&format=png"
                                        ></img>
                                    </div>
                                    <div className="items-center justify-center">
                                        <h6 className="mt-2 text-sm"> Common Areas</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 mb-3 ml-8 justify-evenly">
                                <div className="w-20 ">
                                    <div>
                                        <img
                                            className="h-8 w-8"
                                            src="https://img.icons8.com/?size=80&id=I9AmJztVLY5c&format=png"
                                        ></img>
                                    </div>
                                    <div className=" items-center justify-center">
                                        <h6 className="mt-2 text-sm">Fast Network</h6>
                                    </div>
                                </div>
                                <div className="w-20">
                                    <div>
                                        <img
                                            className="h-8  w-8"
                                            src="https://img.icons8.com/?size=80&id=7gi93ExbAOYn&format=png"
                                        ></img>
                                    </div>
                                    <div className="flex  items-center justify-center">
                                        <h6 className="mt-2 text-sm">Air Condition</h6>
                                    </div>
                                </div>
                                <div className="w-24">
                                    <div>
                                        <img
                                            className="h-8 w-8"
                                            src="https://img.icons8.com/?size=80&id=LL5XgunIEH7Y&format=png"
                                        ></img>
                                    </div>
                                    <div className="flex  items-center justify-center">
                                        <h6 className="mt-2 text-sm">Roasted Coffee</h6>
                                    </div>
                                </div>
                                <div className="w-16">
                                    <div>
                                        <img
                                            className="h-8 w-8 "
                                            src="https://img.icons8.com/?size=80&id=92031&format=png"
                                        ></img>
                                    </div>
                                    <div className="flex  items-center justify-center">
                                        <h6 className="mt-2 text-sm">Onsite Staff</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <br></br>
                    <div
                        data-aos="fade-left"
                        className="p-4  py-6 rounded-lg bg-blue-200 md:p-8"
                    >
                        <form>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John "
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    placeholder="johndoe@example.com"
                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    className="block w-full h-16 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-24 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Add To Cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <h6 className="text-4xl px-16">Inside`s View</h6>
            <br></br>
            <div
                data-aos="fade-up"
                style={{ width: 1250, marginLeft: 60 }}
                className="flex overflow-x-scroll h-60"
            >
                <img
                    data-aos="flip-left"
                    className="h-60 w-96"
                    src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nfGVufDB8fDB8fHww"
                ></img>
                <img
                    data-aos="flip-right"
                    className="h-60 w-96 ml-6"
                    src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <img
                    data-aos="flip-left"
                    className="h-60 w-96 ml-6"
                    src="https://plus.unsplash.com/premium_photo-1661963942331-50c037df1c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y293b3JraW5nfGVufDB8fDB8fHww"
                ></img>
                <img
                    data-aos="flip-right"
                    className="h-60 w-96 ml-6"
                    src="https://images.unsplash.com/photo-1604328703693-18313fe20f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y293b3JraW5nfGVufDB8fDB8fHww"
                ></img>
                <img
                    data-aos="flip-left"
                    className="h-60 w-96 ml-6"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"
                ></img>
            </div>
            <h6 className="text-4xl mt-10 mb-6 px-16">Location</h6>
            <div data-aos="zoom-in" className="w-full  px-16 h-80">
                <iframe
                    className="w-full h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6187197296435!2d108.32704779999999!3d15.876624400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420e7e7cbe081f%3A0xb9144b8628542b0b!2zMTIyIE5ndXnhu4VuIFRow6FpIEjhu41jLCBQaMaw4budbmcgTWluaCBBbiwgSOG7mWkgQW4sIFF14bqjbmcgTmFtLCBWaWV0bmFt!5e0!3m2!1sen!2sin!4v1710683914254!5m2!1sen!2sin"
                ></iframe>
            </div>
            <br></br>
            <br></br>
            <h6 className="text-4xl px-16">Similar Properties</h6>
            <br></br>
            <div data-aos="fade-up" className="flex w-full px-16  justify-evenly">
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">
                            Coworking
                        </h3>
                        <h2 className=" title-font text-lg font-medium ml-2">We Work</h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹8,500/Seat</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">
                            Coworking
                        </h3>
                        <h2 className=" title-font text-lg font-medium ml-2">
                            Spring House
                        </h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹6,500/Seat</p>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y293b3JraW5nfGVufDB8fDB8fHwwI"
                        />
                    </a>
                    <div className="mt-4">
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">
                                Coworking
                            </h3>
                            <h2 className=" title-font text-lg font-medium ml-2">
                                Employers Place
                            </h2>
                            <p className="mt-1 text-lg ml-2">Starting from ₹5,500/Seat</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 m-2 rounded w-full border-2 border-grey-200">
                    <a className="block relative h-54 rounded overflow-hidden">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://plus.unsplash.com/premium_photo-1661963899181-3adc0a644f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y293b3JraW5nfGVufDB8fDB8fHww"
                        />
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-2">
                            Coworking
                        </h3>
                        <h2 className="title-font text-lg font-medium ml-2">
                            <b>The Officers</b>
                        </h2>
                        <p className="mt-1 text-lg ml-2">Starting from ₹6,500/Seat</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default C1;
