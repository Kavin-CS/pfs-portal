import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ReportsPage from '../../index';
import ThemeProvider from '../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Reports Page', () => {
  it('Reports Page render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <ReportsPage />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <ReportsPage />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('reports-page')).toMatchSnapshot();
  });
});
