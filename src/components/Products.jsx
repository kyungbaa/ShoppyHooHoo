import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';
export default function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery(['products'], getProducts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-5 gap-4 px-2">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
