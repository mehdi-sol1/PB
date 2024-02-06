import React from 'react';
import { useState, useEffect } from 'react';
import clientimg from '../assets/client.png';
import clientimg2 from '../assets/client2.png';
import clientimg3 from '../assets/client3.png';
// Add more import statements for additional images

function Users(props) {
  const { site } = props;
  const [uniqueNames, setUniqueNames] = useState(new Set());
  const clientImages = [clientimg, clientimg2, clientimg3]; // Add more images to the array

  useEffect(() => {
    const uniqueNamesSet = new Set(site.map(item => item['Clients']));
    setUniqueNames(uniqueNamesSet);
  }, [site]);

  return (
    <div className='bg-white text-white w-screen min-h-[700px] h-auto flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden relative'>
      <h1 className='font-titiweb italic font-bold text-5xl mb-8 text-gray-500 mt-8'>Current Users</h1> 
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400 rounded-full z-0'></div>
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob top-[35%] left[75%] transform translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-300 rounded-full z-0'></div>
      <div className='absolute mix-blend-multiply blur-2xl opacity-80 animate-blob right-0 transform translate-x-1/2 translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full z-0'></div>
      <div className='flex flex-wrap justify-center items-center h-auto z-10'>
        {Array.from(uniqueNames).map((uniqueName, index) => (
          <div key={index} className='bg-white text-gray-500 h-[200px] w-[200px] rounded-3xl flex justify-center items-center flex-col border-indigo-400 border-[10px] mx-8 my-8'>
            <img src={clientImages[index % clientImages.length]} className='w-[120px] h-[120px] mb-2' />
            <p className='font-bold text-xl'>{uniqueName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Users;
