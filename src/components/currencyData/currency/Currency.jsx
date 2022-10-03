import { BsArrowRight } from 'react-icons/bs';
import styles from './Currency.module.css';

function Currency({ name, image, fullName }) {
  return (
    <div className={styles.card}>
      <BsArrowRight className={styles.icon} />
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <h2>{fullName}</h2>
    </div>
  );
}

export default Currency;
