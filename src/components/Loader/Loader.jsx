import { RingLoader } from 'react-spinners';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <RingLoader color="rgb(70, 172, 212)" className={styles.loader} />
    </div>
  );
};

export default Loader;
