import React from 'react';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="absolute w-5 h-5 text-red-500 text-xs font-black rounded-full text-center -top-1 -right-3">
      {products && <span>{products.length}</span>}
    </div>
  );
}
