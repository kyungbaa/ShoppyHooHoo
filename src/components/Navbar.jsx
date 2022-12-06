import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>
            <img src="./logo192.png" alt="shoppyHooHoo Logo" />
            ShoppyHooHoo
          </h1>
        </Link>

        <ul>
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
