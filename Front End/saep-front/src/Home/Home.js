import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  

  return (
<div>
      <div className='flex items-center justify-center h-screen'>
        <div>
            <h1 className='flex items-center justify-center mb-10 text-4xl font-bold'>Áreas</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => (
        <Link to={`/alocacao/${id}`}>
            <div
            key={id}
            className="w-16 h-16 bg-red-500 rounded-lg mx-2 flex items-center justify-center text-white text-2xl font-bold"
          >
            {id}
          </div>
        </Link> 
        ))}
      </div>
        </div>
        
</div>
</div>
  );
};

export default Home;
