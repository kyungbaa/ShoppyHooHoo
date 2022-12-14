import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className="py-1 px-2  text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
