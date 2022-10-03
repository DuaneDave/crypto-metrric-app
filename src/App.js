import { Provider } from 'react-redux';
import store from './redux/configureStore';

import Header from './components/header/Header';
import Homepage from './components/currencyData/Homepage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;
