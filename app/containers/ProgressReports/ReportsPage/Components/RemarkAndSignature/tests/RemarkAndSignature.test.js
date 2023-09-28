import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import RemarkAndSignature from '../index';
import ThemeProvider from '../../../../../../utils/themeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('Remark and Signature component', () => {
  const div = document.createElement('div');
  it('Remark and Signature component renders correctly', () => {
    ReactDOM.render(
      <ThemeProvider>
        <Router>
          <RemarkAndSignature />
        </Router>
      </ThemeProvider>,
      div
    );

    const { getByTestId } = render(
      <ThemeProvider>
        <Router>
          <RemarkAndSignature />
        </Router>
      </ThemeProvider>
    );

    expect(getByTestId('remark-and-signature-component')).toMatchSnapshot();
  });
});
