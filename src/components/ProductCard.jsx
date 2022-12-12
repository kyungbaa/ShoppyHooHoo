import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product, // 구조분해할당해버린 product를 재사용하기 위해서
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li
      className="cursor-pointer transition-all hover:scale-105"
      onClick={goToProductDetail}
    >
      <img src={image} alt={title} className="w-full" />
      <div className="mt-2 px-2 flex font-semibold justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-500">{category}</p>
    </li>
  );
}
