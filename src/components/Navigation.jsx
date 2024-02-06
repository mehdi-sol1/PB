// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="relative w-full h-[80px] justify-center items-center bg-gray-600 p-4">
      <ul className="flex mt-5 justify-center items-center text-white font-bold">
        <li className="mr-6  hover:text-blue-500">
          <Link to="/">Home</Link>
        </li>

        <li className="mr-6  hover:text-blue-500">
          <Link to="/site">Site</Link>
        </li>

        <li className="mr-6  hover:text-blue-500">
          <Link to="/machine">Machine</Link>
        </li>
        <li className="mr-6  hover:text-blue-500">
          <Link to="/part">Part</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
