import { useDispatch, useSelector } from 'react-redux';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RiMenu3Fill } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';

import { selectUserData } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  menuBackdropStyles,
  menuBurgerStyles,
  menuItemStyles,
  menuWrapStyles,
} from '../../utils/customStyles';
import s from './UserMenu.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);

  const [width, setWidth] = useState(window.innerWidth);

  const [anchorElBurger, setAnchorElBurger] = useState(null);

  const handleOpenBurgerMenu = event => {
    setAnchorElBurger(event.currentTarget);
  };

  const handleCloseBurgerMenu = () => {
    setAnchorElBurger(null);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    if (width > 767) {
      if (anchorElBurger) {
        setAnchorElBurger(null);
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [width, anchorElBurger]);

  return (
    <>
      <div className={s.user_menu}>
        <p className={s.greeting_text}>
          Welcome back, <span>{user.name}!</span>
        </p>

        <StyledBtn onClick={() => dispatch(logout())}>Logout</StyledBtn>
      </div>

      <div className={s.mob_menu}>
        <p className={s.greeting_text}>
          Welcome back, <span>{user.name}!</span>
        </p>
        <Button
          id="burger-menu-button"
          aria-controls={anchorElBurger ? 'burger-menu' : null}
          aria-hidden="false"
          aria-haspopup="true"
          aria-expanded={anchorElBurger ? 'true' : null}
          onClick={handleOpenBurgerMenu}
          sx={menuBurgerStyles}
        >
          <RiMenu3Fill className={s.ico_burger} />
        </Button>

        <Menu
          id="burger-menu"
          className={s.my_menu}
          aria-labelledby="burger-menu-button"
          anchorEl={anchorElBurger}
          open={Boolean(anchorElBurger)}
          onClose={handleCloseBurgerMenu}
          anchorOrigin={{
            vertical: 40,
            horizontal: -120 + 35,
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          slotProps={{
            paper: {
              sx: menuWrapStyles,
            },
            root: {
              BackdropProps: {
                sx: menuBackdropStyles,
              },
            },
          }}
        >
          <MenuItem onClick={handleCloseBurgerMenu} sx={menuItemStyles}>
            <Link to={'/contacts'} className={s.burger_link}>
              <TiContacts />
              Contacts
            </Link>{' '}
          </MenuItem>

          <MenuItem onClick={() => dispatch(logout())} sx={menuItemStyles}>
            <RiLogoutBoxLine />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default UserMenu;
