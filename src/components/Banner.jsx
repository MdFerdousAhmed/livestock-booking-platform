import Image from "next/image";
import React from "react";

const AnimalMarketBanner = () => {
  return (
    <section className="bg-linear-to-r from-green-600 to-emerald-500 text-white py-16 px-6 rounded-lg ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Buy & Sell Animals Easily
          </h1>
          <p className="mt-4 text-lg text-green-100">
            This is a modern and user-friendly livestock marketplace designed to help users easily find
            and book animals for Qurbani. The platform features a variety of animals including cows and goats,
            with detailed information such as breed, price, weight, age, and location.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Browse Animals
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition">
              Sell Now
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/caw1.jpg" // put your image in public folder
            alt="Animal Market"
            width={100}
            height={100}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AnimalMarketBanner;