import { createContext, useContext } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';
import React, { useState, useEffect } from 'react';
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      // 웹 어플리케이션 실행 후 세션에 사용자 정보(user)가 남아있거나 혹은 사용자가 로그인을 했다면 유효한 정상적인 유효한 user객체가 전달되고
      // 전달된 user를 이용해서 컴포넌트의 상태 업데이트
      // 사용자가 로그아웃을 하면 정보가 없기때문에 null이 전달되고 setUser를 null로 설정한다.
    });
    // onUserStateChange(setUser); --> 인자와 참조값이 동일하므로 이렇게 축약 가능
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
