// import React, { useState } from 'react';
// import Link from 'next/link';

// const data = [
//   {
//     link: "C1",
//     name: "Green Chillies",
//     image: "/Categories/Cafe/Image1",
//     about: "café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee.",
//     location: { lat: 0, lng: 0 } // Example coordinates
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
//   const [view, setView] = useState('list'); // State to manage view (list or map)

//   const toggleView = () => {
//     setView(view === 'list' ? 'map' : 'list');
//   };

//   return (
//     <div>
//       <div className="flex justify-evenly mt-6 mb-8">
//         <div className='w-full'><h1 className=' px-20 font-sans text-5xl'>Universities And Colleges</h1></div>
//         <div className='w-full px-28 flex justify-end'><button onClick={toggleView} className="ml-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           {view === 'list' ? 'Switch to Map' : 'Switch to List'}
//         </button></div>
//       </div>
//       {view === 'list' ? (
//         <div className="flex flex-wrap justify-center">
//           {data.map((item, index) => (
//             <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex justify-evenly  py-8">
//               <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <a href="#">
//                   <img className="rounded-t-lg" src={item.image} alt="" />
//                 </a>
//                 <div className="p-5">
//                   <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
//                   </a>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.about}</p>
//                   <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     <h1 className='text-blue-700 hover:cursor-pointer'>Read More</h1>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447908.52408828447!2d76.99643812947232!3d28.711017283667935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb11aaaaaab%3A0xcba3e9ce13b65cb5!2sGreen%20Chilli&#39;s%20Chinese%20%26%20More!5e0!3m2!1sen!2sin!4v1709320098521!5m2!1sen!2sin" className='w-full' height="650" loading="lazy" ></iframe>
//           {/* Render Google Map here */}
//           {/* You'll need to implement the Google Maps component */}
//           {/* Example: <GoogleMap locations={data.map(item => item.location)} /> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CafesAndRestaurants;
import React, { useState } from 'react';
import Link from 'next/link'
const data = [
  {
    link: "C1",
    name: "Letz Offices , Noida",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293b3JraW5nJTIwZ2lmfGVufDB8fDB8fHww",
    about: "Behat Road Extension , Noida",
    location: { lat: 0, lng: 0 }
  },
  {
    link: "C2",
    name: "Bootstart Workspace , Banglore",
    image: "https://images.unsplash.com/photo-1534134368327-3d2bd764f1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y293b3JraW5nJTIwZ2lmfGVufDB8fDB8fHww",
    location: { lat: 0, lng: 0 },
    about: "Raj Nagar Extension , Banglore"
  },
  {
    link: "C3",
    name: "91Springboot Sector 23 , Hyderabad",
    image: "https://images.unsplash.com/photo-1594125674965-70d796b6693f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvd29ya2luZyUyMGdpZnxlbnwwfHwwfHx8MA%3D%3D",
    location: { lat: 0, lng: 0 },
    about: "Railway Cross Road , Hyderabad"
  },
  {
    link: "C4",
    name: "Starsteel Coworking , Pune",
    image: "https://images.unsplash.com/photo-1618506469810-282bef2b30b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293b3JraW5nJTIwb2ZmaWNlfGVufDB8fDB8fHww",
    location: { lat: 0, lng: 0 },
    about: "Orchid Center , Pune",
  },
  {
    link: "C5",
    name: "Employee Space , Mumbai",
    image: "https://images.unsplash.com/photo-1558274862-fb21bb917cd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvd29ya2luZyUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    location: { lat: 0, lng: 0 },
    about: "Golf Course Extensio Road , Mumbai"
  },
  {
    link: "C6",
    name: "Developers Space",
    image: "/Categories/Cafe/Image6",
    location: { lat: 0, lng: 0 },
    about: "Golf Course Extensio Road , Gurugram"
  },
];

const CafesAndRestaurants = () => {
  const [view, setView] = useState('list'); // State to manage view (list or map)
  const [selectedLocation, setSelectedLocation] = useState(null); // State to manage selected location for map modal

  const toggleView = () => {
    setView(view === 'list' ? 'map' : 'list');
  };

  const openMapModal = (location: any) => {
    setSelectedLocation(location);
  };

  const closeMapModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className='bg-white -mt-24 -mb-12'>
      <br></br>
      <br></br>


      <br></br>

      <div className="flex bg-white  justify-evenly mt-6 mb-8">
        <div className='w-full'><h1 className=' px-16 font-serif text-4xl'><b>Coworking Space</b></h1></div>
        <div className='w-full px-16 flex justify-end'>
          <div className='py-2 flex  justify-center px-2 rounded border-2 border-grey'><select className=''><option className=''>Select Price</option><option className=' '>Less then Rs.10,000</option><option className=' '>10,000 - 20,0000</option><option className=' '>20,000 - 30,000</option><option className=' '>30,000 - 40,000</option></select></div>
          <button onClick={toggleView} className="ml-6  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {view === 'list' ? 'Map View' : 'List View'}
          </button>
        </div>
      </div>
      <div className='flex w-full px-12 overflow-y-scroll '>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>MG Road Gurugram</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Dwarika , Sector 24</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>DLF Noida</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Cannought Place , Delhi</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Sector 64</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Raj Nagar Extension</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>gaur City Mall</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Red Fort Area</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Nawab Ganj Chowk</h1></div>
        <div className='flex justify-center py-2 px-4 ml-3 rounded border-2 border-grey'><h1>Duhai</h1></div>
      </div>
      {view === 'list' ? (
        <div className='flex flex-col lg:flex-row'>
          <div className="flex flex-wrap -ml-6 justify-center px-10">
            {data.map((item, index) => (
              <div key={index} className="flex justify-evenly px-4 py-8">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src={item.image} alt="" />
                  </a>
                  <div className="p-5">
                    <div className='flex justify-between'>
                      <a href="#">
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                      </a>
                      <a><img className='h-16 -mt-6' src="http://localhost:3000/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"></img></a>
                    </div>

                    <p className="mb-2 font-normal flex text-gray-700 dark:text-gray-400"><img className='h-4 w-4 mt-1 mr-1' src="https://cdn-icons-png.flaticon.com/128/149/149060.png"></img>{item.about}</p>
                    <hr></hr>
                    <div className='flex w-full mt-2'>
                      <div className='w-2/3 flex text-lg justify-start'><img className='h-5 w-5  mr-1' src="https://cdn-icons-png.flaticon.com/128/2807/2807224.png"></img>Comfy Workstations</div>
                      <div className='w-1/3 flex text-lg justify-end'><b>Starting from</b></div>
                    </div>
                    <div className='flex w-full mt-2'>
                      <div className='w-1/2 flex text-lg justify-start'><img className='h-5 w-5  mr-1' src="https://cdn-icons-png.flaticon.com/128/1509/1509606.png"></img>Private Cabins</div>
                      <div className='w-1/2 flex text-lg justify-end'><b>Rs. 7,699</b></div>
                    </div>
                    <div className='flex mt-2'>
                      <Link href={`/${item.link}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <h1 className='text-blue-700 hover:cursor-pointer w-full justify-start'>Explore More</h1>
                      </Link>
                      <button onClick={() => openMapModal(item.location)} className="text-md flex w-full justify-end text-blue-700 hover:text-blue-700 focus:outline-none">
                        View Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      ) : (
        <div className='mt-8'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447908.52408828447!2d76.99643812947232!3d28.711017283667935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb11aaaaaab%3A0xcba3e9ce13b65cb5!2sGreen%20Chilli&#39;s%20Chinese%20%26%20More!5e0!3m2!1sen!2sin!4v1709320098521!5m2!1sen!2sin" className='w-full' height="650" loading="lazy" ></iframe>
        </div>
      )}
      {selectedLocation && (
        <div className='flex justify-center'>
          <div className="fixed top-20 mt-20    w-1/2 h-1/2 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 w-full h-full rounded-lg">
              <button onClick={closeMapModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447908.52408828447!2d76.99643812947232!3d28.711017283667935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb11aaaaaab%3A0xcba3e9ce13b65cb5!2sGreen%20Chilli&#39;s%20Chinese%20%26%20More!5e0!3m2!1sen!2sin!4v1709320098521!5m2!1sen!2sin" loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafesAndRestaurants;


