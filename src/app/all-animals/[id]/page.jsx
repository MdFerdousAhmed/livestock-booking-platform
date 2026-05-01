import { BookingForm } from '@/components/BookingFrom';
import { Card } from '@heroui/react';
import Image from 'next/image';

import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://livestock-booking-platform.vercel.app/data.json");
  const animals = await res.json();
  const animal = animals.find(a => a.id == id);
  return {
    title: animal.name,
    description: animal.description,
  }
};

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params; // Get the animal ID from the URL parameters
  const res = await fetch("https://livestock-booking-platform.vercel.app/data.json");
  const animals = await res.json();
  const animal = animals.find(a => a.id == id);
  console.log(animal);
  return (
    <Card >
        <div className="max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 grid space-y-4 container mx-auto p-4 justify-center items-center">

          {/* Image */}
          <Image
            src={animal.image}
            alt={animal.name}
            width={900}
            height={900}
            className="w-full h-100 rounded-lg object-cover"
          />

          {/* Content */}
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800">
              {animal.name}
            </h2>

            <p className="text-sm text-gray-500">
              {animal.type} • {animal.breed}
            </p>

            <p className="text-gray-600 text-sm">
              {animal.description}
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mt-2">
              <p><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
              <p><span className="font-semibold">Age:</span> {animal.age} yrs</p>
              <p><span className="font-semibold">Location:</span> {animal.location}</p>
              <p><span className="font-semibold">Category:</span> {animal.category}</p>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">
                ৳ {animal.price.toLocaleString()}
              </span>
                <div>
                  <BookingForm></BookingForm>
                </div>
            </div>
          </div>

        </div>
    </Card>
  );
};

export default AnimalDetailsPage;