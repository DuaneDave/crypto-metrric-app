import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'https://api.coincap.io/v2/assets#';
const FETCH_CRYPTO_DATA = 'crypto/FETCH_CRYPTO_DATA';

const fetchCrypto = createAsyncThunk(FETCH_CRYPTO_DATA, async () => {
  const response = await fetch(api);
  const data = await response.json();
  return data.slice(0, 12);
});

const initialState = [];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCrypto.fulfilled]: (state, action) => action.payload,
  },
});

export default cryptoSlice.reducer;
export { fetchCrypto };
