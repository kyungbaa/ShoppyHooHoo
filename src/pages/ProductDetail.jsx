import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, option },
    },
  } = useLocation();
  const [selected, setSelected] = useState(option && option[0]);
  const hadleSelect = (e) => setSelected(e.target.value);
  const handleAddCart = () => {};
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
            <lable htmlFor="select" className="mr-3">
              option:
            </lable>
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
          <Button text={'Add Cart'} onClick={handleAddCart} />
        </div>
      </section>
    </>
  );
}
