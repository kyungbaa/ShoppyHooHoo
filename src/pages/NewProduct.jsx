import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

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
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        //firebase에 새로운 제품 추가
        addNewProduct(product, url) //
          .then(() => {
            setSuccess(`성공적으로 제품이 등록되었습니다 :)`);
            setTimeout(() => {
              setSuccess(null);
            }, 10000);
          });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className="w-full px-2">
      <h2 className="text-2xl font-bold my-16  text-center">
        새로운 제품 등록
      </h2>
      <div className="flex justify-center items-center ">
        <div className="h-100 ">
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="local-file"
              className="w-96 mx-auto object-contain max-h-fit "
            />
          )}
        </div>
        <form className="flex flex-col px-20 " onSubmit={handleSubmit}>
          {success && (
            <div
              className=" p-4 my-4 text-sm text-gray-700 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300"
              role="alert"
            >
              <span className="font-bold mr-3">Success</span>
              {success}
            </div>
          )}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="file"
              accept="image/*"
              id="imageUpdate"
              name="file"
              onChange={handleChange}
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
            />
            <label
              htmlFor="imageUpdate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품 이미지
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품명
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품 가격
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
              required
            />
            <label
              htmlFor="category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품 카테고리
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품 설명
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-zinc-500 focus:outline-none focus:ring-0 focus:border-zinc-600 peer"
              required
            />
            <label
              htmlFor="options"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-zinc-600 peer-focus:dark:text-zinc-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              제품 옵션 쉼표로 구분
            </label>
          </div>

          <Button
            text={isUploading ? '제품 등록중...' : '제품 등록'}
            disabled={isUploading}
          />
        </form>
      </div>
    </section>
  );
}
