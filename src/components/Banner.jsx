import React from 'react';

export default function Banner() {
  return (
    <section className="h-96 bg-blue-600 relative">
      <div className="w-full h-full bg-cover bg-banner"></div>
      <div className="absolute w-full top-32 text-center drop-shadow-md text-gray-50">
        <h2 className="text-4xl font-semibold mb-3">Shop With US</h2>
        <p className="text-xl">Best Products, High Quality</p>
      </div>
    </section>
  );
}
