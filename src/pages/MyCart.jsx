import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { FaEquals, FaPlus } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className="px-14">
      <h2 className="mx-12 mt-10 mb-10 text-gray-900 font-bold text-xl text-center">
        My Cart
      </h2>
      {!hasProducts && (
        <p className="text-center">장바구니에 상품이 없습니다.</p>
      )}
      {hasProducts && (
        <>
          <ul className="border-t  border-gray-900">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="mt-6 flex justify-between items-center md:px-8 mb-10">
            <PriceCard text="총 상품 금액" price={totalPrice} />
            <FaPlus className="srink-0" />
            <PriceCard text="배송 금액" price={SHIPPING} />
            <FaEquals className="srink-0" />
            <PriceCard text="결제 금액" price={totalPrice + SHIPPING} />
            <button className="bg-gray-50 p-8 py-11  text-center font-semibold text-lg  border-2 border-gray-900 box-border transition-all hover:bg-gray-900 hover:text-white">
              주문하기
            </button>
          </div>
        </>
      )}
    </section>
  );
}
