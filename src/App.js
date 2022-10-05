import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';

import Header from './components/header/Header';
import Homepage from './components/currencyData/Homepage';
import Details from './components/details/Details';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
