import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from './redux/auth/operations';
import {
  selectUserDataisRefreshing,
  selectUserDataToken,
} from './redux/auth/selectors';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isUserToken = useSelector(selectUserDataToken);
  const isRefreshing = useSelector(selectUserDataisRefreshing);

  useEffect(() => {
    if (!isUserToken) {
      return;
    } else dispatch(refreshUser());
  }, [dispatch, isUserToken]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
