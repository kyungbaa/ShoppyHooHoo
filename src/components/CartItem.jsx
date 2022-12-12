import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';
export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className="flex justify-between items-center  border-b border-gray-900 px-2">
      <img src={image} alt={title} className="w-24 md:w-48" />
      <div className="flex flex-1 justify-between">
        <div className="basis-3/5 ml-10">
          <p className="text-lg font-black">{title}</p>
          <p className=" text-blue-600 font-semibold">{option}</p>
          <p className="mt-2  font-bold">₩{price}</p>
        </div>
        <div className="text-lg flex items-center">
          <AiOutlineMinus
            className="hover:text-blue-700 cursor-pointer transition-all hover:scale-105"
            onClick={handleMinus}
          />
          <span className="px-3 font-semibold">{quantity}</span>
          <AiOutlinePlus
            className="hover:text-blue-700 cursor-pointer transition-all hover:scale-105"
            onClick={handlePlus}
          />
          <span
            className="hover:text-red-600 cursor-pointer pl-4  transition-all"
            onClick={handleDelete}
          >
            Delete
          </span>
        </div>
      </div>
    </li>
  );
}
