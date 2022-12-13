import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, option },
    },
  } = useLocation();

  const [selected, setSelected] = useState(option && option[0]);
  const [success, setSuccess] = useState(false);
  const hadleSelect = (e) => setSelected(e.target.value);

  const handleAddCart = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      },
    });
  };
  return (
    <>
      <h2 className="mx-12 mt-10 mb-10 text-gray-900 font-bold text-xl text-center">
        {category}
      </h2>

      <section className="flex flex-col md:flex-row p-4 justify-center">
        <img src={image} alt={title} className="w-96 px-4 basis-4/12" />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h3 className="text-xl font-bold py-2">{title}</h3>
          <p className="text-xl font-bold py-2">₩{price}</p>
          <p className="py-4 ">{description}</p>

          <div className="flex items-center pb-6 ">
            <label htmlFor="select" className="mr-3">
              option:
            </label>

            <select
              id="select"
              onChange={hadleSelect}
              value={selected}
              className="p-2  my-2 border-2 border-dashed border-brand w-full outline-none "
            >
              {option &&
                option.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && (
            <div
              className=" p-4 my-4 text-sm text-gray-700 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300"
              role="alert"
            >
              <span className="font-bold mr-3">
                장바구니에 성공적으로 담겼습니다.
              </span>
            </div>
          )}
          <Button text={'Add Cart'} onClick={handleAddCart} />
        </div>
      </section>
    </>
  );
}
