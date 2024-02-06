import React from 'react';
import  { useState ,useEffect } from 'react';
import img1 from '../assets/site1.png';
import img2 from '../assets/site2.png';
import img3 from '../assets/site3.png';
import img4 from '../assets/site4.gif';
import img5 from '../assets/site5.gif';

function Site(props) {
  const { site, passuser } = props;
  const [uniqueNames, setUniqueNames] = useState(new Set());
  const webtImages = [img1, img2, img3,img4,img5];

  useEffect(() => {
    // store unique 'Sites de production' names and the ones that corresponds with user s name 
    const uniqueNamesSet = new Set(site.map(item => item['Sites de production']));
   
    

    // Update the state with the unique names
    setUniqueNames(uniqueNamesSet);

  }, [site]); // Include site as a dependency to update when site changes


  // Filter uniqueNamesSet based on the condition of filteredItems to avoid repeating the same data
  const filteredItemsSet = Array.from(uniqueNames).filter(uniqueName =>
    site.some(item => item['Sites de production'] === uniqueName && item['Clients'].toLowerCase() === passuser.toLowerCase())
  );

  return (
    <div className='bg-white text-white w-screen min-h-[700px] h-auto flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden relative'>
      <h1 className='font-titiweb italic font-bold text-5xl mb-8 text-gray-500 mt-8'>Current Work Sites</h1> 
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400 rounded-full z-0'></div>
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob top-[35%] left[90%] transform translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full z-0'></div>
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob left-0 transform translate-x-1/2 translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full z-0'></div>
      <div className='flex flex-wrap justify-center items-center h-auto z-10'>

      {passuser === 'admin' ? (
        Array.from(uniqueNames).map((uniqueName, index) => (
          <div key={index} className='bg-white text-gray-500 h-[200px] w-[200px] rounded-3xl flex justify-center items-center flex-col border-green-400 border-[10px] mx-8 my-8'>
            <img src={webtImages[index % webtImages.length]} className='w-[120px] h-[120px] m-1' />
            <p className='font-bold text-xl'>{uniqueName}</p>
          </div>
        ))
      ) : (
        filteredItemsSet.map((filteredName, index) => (
          <div key={index} className='bg-white text-gray-500 h-[200px] w-[200px] rounded-3xl flex justify-center items-center flex-col border-green-400 border-[10px] mx-8 my-8'>
            <img src={webtImages[index % webtImages.length]} className='w-[120px] h-[120px] mb-2' />
            <p className='font-bold text-xl'>{filteredName}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default Site;
