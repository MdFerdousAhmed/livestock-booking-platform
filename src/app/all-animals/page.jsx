import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimalsPage = async() => {
  const res = await fetch('https://livestock-booking-platform.vercel.app/data.json');
  const animals = await res.json(); 
  console.log(animals)
  return (
    <div>
      <h1>All Animals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;