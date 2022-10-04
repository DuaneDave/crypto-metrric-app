import store from '../redux/configureStore';
import { fetchCrypto, fetchCryptoDetails } from '../redux/crypto/crypto';

describe('crypto reducer', () => {
  it('should fetch crypto', async () => {
    await store.dispatch(fetchCrypto());
    expect(store.getState().crypto.length).toEqual(12);
  });

  it('should fetch crypto details', async () => {
    await store.dispatch(fetchCryptoDetails('Bitcoin'));
    expect(store.getState().crypto.length).toEqual(1);
  });
});
