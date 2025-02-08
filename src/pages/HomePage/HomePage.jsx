import Container from '../../components/Container/Container';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={s.home_container}>
      <img
        className={s.logo}
        src="/logo.png"
        alt="Your Private Electronic Phone book logo"
        width="128"
      />
      <h1 className={s.main_title}>
        Wellcome to{' '}
        <span className={s.accent}>Your Private Electronic Phone book </span>
        application!
      </h1>

      <div className={s.descr}>
        <p className={s.p2}>
          Create your account and add favorite contacts,
          <span> Safe and simple!</span>
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
