import { BsArrowRight } from 'react-icons/bs';

import styles from './CoinInfo.module.css';
import trend from '../../assets/increase.png';

function CoinInfo(
  {
    marketCap, name, price, rank, link, symbol, maxSupply,
  },
) {
  return (
    <div>
      <div className={styles.hero}>
        <img src={trend} alt={name} />
      </div>
      <div>
        <h2 className={styles.heading}>Crypto Data</h2>
      </div>
      <div className={styles.stats}>
        <div className={styles.entry}>
          <h2>Name</h2>
          <p>
            {`${name} (${symbol})`}
          </p>
        </div>

        <div className={styles.entry}>
          <h2>Rank</h2>
          <p>{rank}</p>
        </div>

        <div className={styles.entry}>
          <h2>Price</h2>
          <p>
            $
            {parseFloat(price).toFixed(2)}
          </p>
        </div>

        <div className={styles.entry}>
          <h2>Market Cap</h2>
          <p>{parseFloat(marketCap).toFixed()}</p>
        </div>

        <div className={styles.entry}>
          <h2>Max supply</h2>
          <p>{maxSupply ? parseFloat(maxSupply).toFixed() : 'No data retrieved'}</p>
        </div>

        <div className={styles.entry}>
          <h2>More data</h2>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
