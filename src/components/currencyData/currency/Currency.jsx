/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from 'react-redux';

import { BsArrowRight } from 'react-icons/bs';
import styles from './Currency.module.css';

import { fetchCryptoDetails } from '../../../redux/crypto/crypto';

function Currency({ name, image, fullName }) {
  const dispatch = useDispatch();
  const fetchDataHandler = () => {
    dispatch(fetchCryptoDetails(name));
  };

  return (
    <div className={styles.card}>
      <a>
        <BsArrowRight className={styles.icon} onClick={fetchDataHandler} />
      </a>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <h2>{fullName}</h2>
    </div>
  );
}

export default Currency;
