import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //제품의 사진을 cloudy에 업로드하고 url획득
    uploadImage(file).then((url) => {
      //firebase에 새로운 제품 추가

      addNewProduct(product, url);
    });
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local-file" />}
      <form className="px-2 mt-20" onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="file"
            accept="image/*"
            id="imageUpdate"
            name="file"
            onChange={handleChange}
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
          />
          <label
            htmlFor="imageUpdate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품 이미지
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            id="title"
            name="title"
            value={product.title ?? ''}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품명
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            id="price"
            name="price"
            value={product.price ?? ''}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            required
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품 가격
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            id="category"
            name="category"
            value={product.category ?? ''}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            required
          />
          <label
            htmlFor="category"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품 카테고리
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            id="description"
            name="description"
            value={product.description ?? ''}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품 설명
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            id="options"
            name="options"
            value={product.options ?? ''}
            onChange={handleChange}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            required
          />
          <label
            htmlFor="options"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            상품 옵션 쉼표로 구분
          </label>
        </div>
        <Button text={'제품 등록'} />
      </form>
    </section>
  );
}
