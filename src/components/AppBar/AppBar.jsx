import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerClass = clsx(s.header, isScrolled && s.scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={headerClass}>
      <Container className={s.header_container}>
        <div className={s.menu}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <div className={s.mob_menu}>
          <Link className={s.link} to={'/'}>
            <img className={s.logo} src="/logo.png" alt="Logo" />
          </Link>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
