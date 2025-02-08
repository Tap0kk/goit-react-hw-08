import styles from './Container.module.css';

const Container = ({ children, className = '' }) => {
  let containerClass = `${styles.container}`;

  if (className !== '') {
    containerClass = `${styles.container} ${className}`;
  }

  return <div className={containerClass}>{children}</div>;
};

export default Container;
