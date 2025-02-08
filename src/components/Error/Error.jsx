import s from './Error.module.css';

const Error = ({ error, login = null }) => {
  const handleCloseClick = event => {
    event.target.parentNode.style.visibility = 'hidden';
  };

  return (
    <div className={s.wrap}>
      <p className={s.title}>Oooops something went wrong...</p>

      <p className={s.message}>
        {' '}
        Reason: <span>{error}</span>
      </p>

      <p className={s.message}>Please check details and try again</p>

      {login && (
        <p className={s.message}>
          To log in to your personal account, you need to{' '}
          <a className={s.link} href="/register">
            register new account
          </a>
        </p>
      )}

      <button className={s.close} type="button" onClick={handleCloseClick}>
        X
      </button>
    </div>
  );
};

export default Error;
