import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <>
      <header className="navbar navbar-expand-lg  py-4 px-2 bg-white relative flex items-center w-full justify-between">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-brand"
        >
          <img src="./logo192.png" alt="HooHoo Logo" className="w-7 mr-3" />
          <h1>HooHoo</h1>
        </Link>

        <ul className="flex items-center gap-4 font-semibold">
          <Link to="/products">
            <li>products</li>
          </Link>
          {user && (
            <Link to="/carts" className="relative">
              <li>Carts</li>
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to="/products/new">
              <li>New</li>
            </Link>
          )}
          {user && <User user={user} />}
          {!user && (
            <Button text="Login" onClick={login}>
              Login
            </Button>
          )}
          {user && (
            <Button text="Logout" onClick={logout}>
              Logout
            </Button>
          )}
        </ul>
      </header>
    </>
  );
}
