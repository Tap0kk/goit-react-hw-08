import { RiLoginBoxLine } from 'react-icons/ri';
import { FiUserPlus } from 'react-icons/fi';

import StyledLink from '../StyledLink/StyledLink';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.wrap}>
      <StyledLink to="/login">
        Login
        <RiLoginBoxLine />
      </StyledLink>

      <StyledLink to="/register">
        Sign Up
        <FiUserPlus />
      </StyledLink>
    </div>
  );
};

export default AuthNav;
