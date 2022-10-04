import { useSelector } from 'react-redux';
import CoinInfo from './CoinInfo';

function Details() {
  const cryptoDetails = useSelector((state) => state.crypto);

  return cryptoDetails.map((crypto) => (
    <CoinInfo
      key={crypto.id}
      marketCap={crypto.marketCapUsd}
      name={crypto.name}
      price={crypto.priceUsd}
      rank={crypto.rank}
      link={crypto.explorer}
      symbol={crypto.symbol}
      maxSupply={crypto.maxSupply}
    />
  ));
}

export default Details;
