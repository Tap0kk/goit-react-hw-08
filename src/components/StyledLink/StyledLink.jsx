import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './StyledLink.module.css';

const StyledLink = ({ to, children, showActive = true }) => {
  const linkClass = ({ isActive }) =>
    clsx(styles.outline_link, isActive && styles.outline_link_active);

  return (
    <NavLink to={to} className={showActive ? linkClass : styles.outline_link}>
      {children}
    </NavLink>
  );
};

export default StyledLink;
