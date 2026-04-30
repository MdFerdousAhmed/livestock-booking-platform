import Image from 'next/image';
import React from 'react';

const TopGenerations = async() => {
  const res = await fetch('https://livestock-booking-platform.vercel.app/data.json');
  const animals = await res.json();
  const topAnimals = animals.slice(0, 8);
  console.log(topAnimals)
  return (
    <div>
      <h1 className='text-2xl font-bold mt-5'>Top Animals</h1>
      <div>
        {
          topAnimals.map(animal => <div key={animal.id}>
             <h2>name: {animal.name}</h2>
             <Image src={animal.image} alt={animal.name} width={500} height={300} />
          </div>)
        }
      </div>
    </div>
  );
};

export default TopGenerations;