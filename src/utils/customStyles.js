export const menuBurgerStyles = {
  padding: 0,
  minWidth: 'unset',
  width: '35px',
  height: '35px',
  lineHeight: 'normal',
  backgroundColor: 'transparent',
  color: 'inherit',
  transition: 'transform 250ms linear, filter 250ms linear',

  ':hover': {
    outline: 'transparent',
    transform: 'scale(1.1)',
    filter: 'drop-shadow(0 0 3px rgb(0, 0, 0, 0.8))',
  },
};

export const menuBackdropStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(0.3px)',
};

export const menuWrapStyles = {
  backgroundColor: '#343434',
  boxShadow:
    '1px 1px 3px 1px #000000,1px 1px 6px 2px rgba(0, 0, 0, 0.5),inset 0px 0px 2px 0px #000000',
  backdropFilter: 'blur(0.3px)',

  '& > ul': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '8px',
    padding: '10px 20px',
  },
};

export const menuItemStyles = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
  padding: '4px 12px',
  minHeight: 'unset',

  color: 'var(--primary-color)',
  fontSize: '20px',
  lineHeight: 'normal',
  letterSpacing: 'normal',

  transition: 'all 250ms linear',

  '&:hover, &:focus-visible': {
    backgroundColor: 'transparent',
    transform: 'scale(1.1)',

    color: 'var(--background-color)',
    fontWeight: 500,
  },
};
