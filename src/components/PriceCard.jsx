import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 text-center ">
      <p>{text}</p>
      <p className="font-semibold text-lg">₩{price}</p>
    </div>
  );
}
