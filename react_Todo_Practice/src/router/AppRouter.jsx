import { Outlet } from 'react-router-dom';
import { Header } from '../components/commen';
import { useState } from 'react';

const AppRoute = () => {
  const [headerProps, setHeaderProps] = useState({});

  console.log('라우터 페이지 헤더 프롭', headerProps);
  return (
    <div>
      <Header {...headerProps} />
      <Outlet context={{ setHeaderProps }} />
    </div>
  );
};

export default AppRoute;
