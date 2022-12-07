import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 권한이 없는 유저가 권한이 필요한 컴포넌트에 접근하는 것을 막아주기 위한 컴포넌트
  // 로그인한 사용자가 았는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmine이 true인 경우에는 로그인도 되어있어야하고, 어드민 권한도 가지고 있어야 한다.
  // 조건에 맞지 않으면 / 상위경로로 이동
  // 조건에 맞는 경우에만 전달된 children(전달된 해당 컴포넌트)을 보여줌

  const { user } = useAuthContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
