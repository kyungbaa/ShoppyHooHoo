import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="cursor-pointer ">
      <img src={image} alt={title} className="w-full" />
      <div className="mt-2 px-2 flex font-semibold justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-500">{category}</p>
    </li>
  );
}
