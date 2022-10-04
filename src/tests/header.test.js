import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/configureStore';
import Header from '../components/header/Header';

describe('Header', () => {
  it('should render the header', () => {
    const snap = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
