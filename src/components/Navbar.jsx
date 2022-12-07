import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';
export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      console.log(user);
      // 웹 어플리케이션 실행 후 세션에 사용자 정보(user)가 남아있거나 혹은 사용자가 로그인을 했다면 유효한 정상적인 유효한 user객체가 전달되고
      // 전달된 user를 이용해서 컴포넌트의 상태 업데이트
      // 사용자가 로그아웃을 하면 정보가 없기때문에 null이 전달되고 setUser를 null로 설정한다.
    });
    // onUserStateChange(setUser); --> 인자와 참조값이 동일하므로 이렇게 축약 가능
  }, []);

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
