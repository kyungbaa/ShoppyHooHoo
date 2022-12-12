import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className="absolute w-5 h-5 text-red-500 text-xs font-black rounded-full text-center -top-1 -right-3">
      {products && <span>{products.length}</span>}
    </div>
  );
}
