import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-lg shadow-sm py-2 px-2 bg-white relative flex items-center w-full justify-between">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-brand"
        >
          <img src="./logo192.png" alt="HooHoo Logo" className="w-9" />
          <h1>HooHoo</h1>
        </Link>

        <ul className="flex items-center gap-4 font-semibold">
          <Link to="/products">
            <li>products</li>
          </Link>
          <Link to="/carts">
            <li>Carts</li>
          </Link>
          <Link to="/products/new">
            <li>New</li>
          </Link>
          <button>Login</button>
        </ul>
      </header>
    </>
  );
}
