import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
