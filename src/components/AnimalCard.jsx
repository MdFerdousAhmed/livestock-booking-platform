import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <Card >
      <div className='space-y-4'>
             <Image className='rounded-lg' src={animal.image} alt={animal.name} width={500} height={300} />
             <h2 className=' font-semibold'>Animal Name: {animal.name}</h2>
          </div>
          <Link href={`/all-animals/${animal.id}`}>
            <Button variant="outline" className='w-full mt-4'>View Details</Button>
          </Link>
    </Card>
  );
};

export default AnimalCard;