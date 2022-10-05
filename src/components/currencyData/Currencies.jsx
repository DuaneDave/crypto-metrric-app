import Currency from './currency/Currency';
import Bitcoin from '../../assets/wallet.png';
import styles from './Currencies.module.css';
import coinData from '../../utility/coinData';

function Currencies() {
  return (
    <main>
      <section className={styles.container}>
        <img src={Bitcoin} alt="bitcoin wallet" />
        <div>
          <h1>
            Stay
            <br />
            connected to
            <br />
            the crypto world
          </h1>
        </div>
      </section>
      <section className={styles.dataWrapper}>
        {coinData.map((coin) => (
          <Currency
            key={coin.id}
            name={coin.name}
            image={coin.imageUrl}
            fullName={coin.fullName}
          />
        ))}
      </section>
    </main>
  );
}

export default Currencies;
