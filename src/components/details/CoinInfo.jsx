function CoinInfo(
  {
    marketCap, name, price, rank, link, symbol, maxSupply,
  },
) {
  return (
    <div>
      <div>new page</div>
      <div>
        <div>
          <p>Name</p>
          <p>
            {`${name}(${symbol})`}
          </p>
        </div>

        <div>
          <p>Rank</p>
          <p>{rank}</p>
        </div>

        <div>
          <p>Price</p>
          <p>
            $
            {price}
          </p>
        </div>

        <div>
          <p>Market Cap</p>
          <p>{marketCap}</p>
        </div>

        <div>
          <p>Max supply</p>
          <p>{maxSupply}</p>
        </div>

        <div>
          <p>More data</p>
          <p>{link}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
