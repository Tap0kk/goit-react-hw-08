import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <Container className={styles.register_container}>
      <h2 className={styles.title}>Create account</h2>

      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
