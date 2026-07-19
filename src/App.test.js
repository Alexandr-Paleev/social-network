import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

test('renders navigation links', () => {
  const { getByText } = render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App
        state={store.getState()}
        store={store}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
  );
  expect(getByText(/Profile/i)).toBeInTheDocument();
});
