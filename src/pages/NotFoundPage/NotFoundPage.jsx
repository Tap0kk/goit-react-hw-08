import Container from '../../components/Container/Container';
import StyledLink from '../../components/StyledLink/StyledLink';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container className={styles.not_found_container}>
      <h2 className={styles.title}>Sorry... Page was not found.</h2>

      <StyledLink to="/">Go home</StyledLink>
    </Container>
  );
};

export default NotFoundPage;
