import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <Container className={styles.login_contaiter}>
      <h2 className={styles.title}>Login</h2>

      <LoginForm />
    </Container>
  );
};

export default LoginPage;
