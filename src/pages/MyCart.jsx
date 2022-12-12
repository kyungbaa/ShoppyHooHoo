import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { FaEquals, FaPlus } from 'react-icons/fa';

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className="w-screen">
      <h2 className="mx-12 mt-10 mb-10 text-gray-900 font-bold text-xl text-center">
        My Cart
      </h2>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-t  border-gray-900">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
        </>
      )}
      <div className="mt-6 flex justify-between items-center md:px-8">
        <PriceCard text="총 상품 금액" price={totalPrice} />
        <FaPlus className="srink-0" />
        <PriceCard text="배송 금액" price={SHIPPING} />
        <FaEquals className="srink-0" />
        <PriceCard text="결제 금액" price={totalPrice + SHIPPING} />
      </div>
    </section>
  );
}
